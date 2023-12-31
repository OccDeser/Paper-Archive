# Crypto[2023-1]
## Completeness Theorems for Adaptively Secure Broadcast.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#completeness-theorems-for-adaptively-secure-broadcast)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#completeness-theorems-for-adaptively-secure-broadcast)
### Authors
* Ran Cohen, Efi Arazi School of Computer Science, Reichman University, Herzliya, Israel
* Juan Garay, Texas A&M University, College Station, USA
* Vassilis Zikas, Purdue University, West Lafayette, USA
### Abstract
> The advent of blockchain protocols has reignited the interest in adaptively secure broadcast; it is by now well understood that broadcasting over a diffusion network allows an adaptive adversary to corrupt the sender depending on the message it attempts to send and change it. Hirt and Zikas [Eurocrypt ’10] proved that this is an inherent limitation of broadcast in the simulation-based setting—i.e., this task is impossible against an adaptive adversary corrupting a majority of the parties (a task that is achievable against a static adversary).
> 
> The contributions of this paper are two-fold. First, we show that, contrary to previous perception, the above limitation of adaptively secure broadcast is not an artifact of simulation-based security, but rather an inherent issue of adaptive security. In particular, we show that: (1) it also applies to the property-based broadcast definition adapted for adaptive adversaries, and (2) unlike other impossibilities in adaptive security, this impossibility cannot be circumvented by adding a programmable random oracle, in neither setting, property-based or simulation-based.
> 
> Second, we turn to the resource-restricted cryptography (RRC) paradigm [Garay et al., Eurocrypt ’20], which has proven useful in circumventing impossibility results, and ask whether it also affects the above negative result. We answer this question in the affirmative, by showing that time-lock puzzles (TLPs)—which can be viewed as an instance of RRC—indeed allow for achieving the property-based definition and circumvent the impossibility of adaptively secure broadcast. The natural question is then, do TLPs also allow for simulation-based adaptively secure broadcast against corrupted majorities? We answer this question in the negative. However, we show that a positive result can be achieved via a non-committing analogue of TLPs in the programmable random-oracle model.
> 
> Importantly, and as a contribution of independent interest, we also present the first (limited) composition theorem in the resource-restricted setting, which is needed for the complexity-based, non-idealized treatment of TLPs in the context of other protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_1](https://doi.org/10.1007/978-3-031-38557-5_1)
## Bingo: Adaptivity and Asynchrony in Verifiable Secret Sharing and Distributed Key Generation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#bingo-adaptivity-and-asynchrony-in-verifiable-secret-sharing-and-distributed-key-generation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#bingo-adaptivity-and-asynchrony-in-verifiable-secret-sharing-and-distributed-key-generation)
### Authors
* Ittai Abraham, Intel Labs, Petach Tikva, Israel
* Philipp Jovanovic, University College London, London, UK
* Sarah Meiklejohn, University College London, London, UK
* Mary Maller, Ethereum Foundation and PQShield, Bern, Switzerland
* Sarah Meiklejohn, Google, Mountain View, USA
* Gilad Stern, The Hebrew University of Jerusalem, Jerusalem, Israel
### Abstract
> We present \(\textsf{Bingo}\), an adaptively secure and optimally resilient packed asynchronous verifiable secret sharing (PAVSS) protocol that allows a dealer to share \(f+1\) secrets with a total communication complexity of \(O(\lambda n^2)\) words, where \(\lambda \) is the security parameter and n is the number of parties. Using \(\textsf{Bingo}\), we obtain an adaptively secure validated asynchronous Byzantine agreement (VABA) protocol that uses \(O(\lambda n^3)\) expected words and constant expected time, which we in turn use to construct an adaptively secure high-threshold asynchronous distributed key generation (ADKG) protocol that uses \(O(\lambda n^3)\) expected words and constant expected time. To the best of our knowledge, our ADKG is the first to allow for an adaptive adversary while matching the asymptotic complexity of the best known static ADKGs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_2](https://doi.org/10.1007/978-3-031-38557-5_2)
## Network-Agnostic Security Comes (Almost) for Free in DKG and MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#network-agnostic-security-comes-almost-for-free-in-dkg-and-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#network-agnostic-security-comes-almost-for-free-in-dkg-and-mpc)
### Authors
* Renas Bacho, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Renas Bacho, Saarland University, Saarbrücken, Germany
* Daniel Collins, EPFL, Lausanne, Switzerland
* Chen-Da Liu-Zhang, Luzern University of Applied Sciences and Arts, Lucerne, Switzerland
* Chen-Da Liu-Zhang, Web3 Foundation, Houston, USA
### Abstract
> Distributed key generation (DKG) protocols are an essential building block for threshold cryptosystems. Many DKG protocols tolerate up to \(t_s<n/2\) corruptions assuming a well-behaved synchronous network, but become insecure as soon as the network delay becomes unstable. On the other hand, solutions in the asynchronous model operate under arbitrary network conditions, but only tolerate \(t_a<n/3\) corruptions, even when the network is well-behaved.
> 
> In this work, we ask whether one can design a protocol that achieves security guarantees in either scenario. We show a complete characterization of network-agnostic DKG protocols, showing that the tight bound is \(t_a+2t_s <n\). As a second contribution, we provide an optimized version of the network-agnostic multi-party computation (MPC) protocol by Blum, Liu-Zhang and Loss [CRYPTO’20] which improves over the communication complexity of their protocol by a linear factor. Moreover, using our DKG protocol, we can instantiate our MPC protocol in the plain PKI model, i.e., without the need to assume an expensive trusted setup.
> 
> Our protocols incur comparable communication complexity as state-of-the-art DKG and MPC protocols with optimal resilience in their respective purely synchronous and asynchronous settings, thereby showing that network-agnostic security comes (almost) for free.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_3](https://doi.org/10.1007/978-3-031-38557-5_3)
## Practical Settlement Bounds for Longest-Chain Consensus.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#practical-settlement-bounds-for-longest-chain-consensus)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#practical-settlement-bounds-for-longest-chain-consensus)
### Authors
* Peter Gaži, IOG, Bratislava, Slovakia
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Alexander Russell, University of Connecticut and IOG, Storrs, CT, USA
### Abstract
> Nakamoto’s longest-chain consensus paradigm now powers the bulk of the world’s cryptocurrencies and distributed finance infrastructure. An emblematic property of longest-chain consensus is that it provides probabilistic settlement guarantees that strengthen over time. This makes the exact relationship between settlement error and settlement latency a critical aspect of the protocol that both users and system designers must understand to make informed decisions. A recent line of work has finally provided a satisfactory rigorous accounting of this relationship for proof-of-work longest-chain protocols, but those techniques do not appear to carry over to the proof-of-stake setting.
> 
> This article develops a new analytic approach for establishing such settlement guarantees that yields explicit, rigorous settlement bounds for proof-of-stake longest-chain protocols, placing them on equal footing with their proof-of-work counterparts. Our techniques apply with some adaptations to the proof-of-work setting where they provide improvements to the state-of-the-art settlement bounds for proof-of-work protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_4](https://doi.org/10.1007/978-3-031-38557-5_4)
## New Bounds on the Local Leakage Resilience of Shamir's Secret Sharing Scheme.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#new-bounds-on-the-local-leakage-resilience-of-shamirs-secret-sharing-scheme)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#new-bounds-on-the-local-leakage-resilience-of-shamirs-secret-sharing-scheme)
### Authors
* Ohad Klein, Hebrew University of Jerusalem, Jerusalem, Israel
* Ilan Komargodski, Hebrew University of Jerusalem, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### Abstract
> We study the local leakage resilience of Shamir’s secret sharing scheme. In Shamir’s scheme, a random polynomial f of degree t is sampled over a field of size \(p>n\), conditioned on \(f(0)=s\) for a secret s. Any t shares (i, f(i)) can be used to fully recover f and thereby f(0). But, any \(t-1\) evaluations of f at non-zero coordinates are completely independent of f(0). Recent works ask whether the secret remains hidden even if say only 1 bit of information is leaked from each share, independently. This question is well motivated due to the wide range of applications of Shamir’s scheme. For instance, it is known that if Shamir’s scheme is leakage resilient in some range of parameters, then known secure computation protocols are secure in a local leakage model.
> 
> Over characteristic-2 fields, the answer is known to be negative (e.g., Guruswami and Wootters, STOC ’16). Benhamouda, Degwekar, Ishai, and Rabin (CRYPTO ’18) were the first to give a positive answer assuming computation is done over prime-order fields. They showed that if \(t \ge 0.907n\), then Shamir’s scheme is leakage resilient. Since then, there has been extensive efforts to improve the above threshold and after a series of works, the current record shows leakage resilience for \(t\ge 0.78n\) (Maji et al., ISIT ’22). All existing analyses of Shamir’s leakage resilience for general leakage functions follow a single framework for which there is a known barrier for any \(t \le 0.5 n\).
> 
> In this work, we a develop a new analytical framework that allows us to significantly improve upon the previous record and obtain additional new results. Specifically, we show:
> 
> 1. Shamir’s scheme is leakage resilient for any \(t \ge 0.69n\).
> 
> 2. If the leakage functions are guaranteed to be “balanced” (i.e., splitting the domain of possible shares into 2 roughly equal-size parts), then Shamir’s scheme is leakage resilient for any \(t \ge 0.58n\).
> 
> 3. If the leakage functions are guaranteed to be “unbalanced” (i.e., splitting the domain of possible shares into 2 parts of very different sizes), then Shamir’s scheme is leakage resilient as long as \(t \ge 0.01 n\). Such a result is provably impossible to obtain using the previously known technique.
> 
> All of the above apply more generally to any MDS codes-based secret sharing scheme.
> 
> Confirming leakage resilience is most important in the range \(t \le n/2\), as in many applications, Shamir’s scheme is used with thresholds \(t\le n/2\). As opposed to the previous approach, ours does not seem to have a barrier at \(t=n/2\), as demonstrated by our third contribution.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_5](https://doi.org/10.1007/978-3-031-38557-5_5)
## Arithmetic Sketching.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#arithmetic-sketching)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#arithmetic-sketching)
### Authors
* Dan Boneh, Stanford University, Stanford, USA
* Elette Boyle, Reichman University, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Henry Corrigan-Gibbs, MIT, Cambridge, USA
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
### Abstract
> This paper introduces arithmetic sketching, an abstraction of a primitive that several previous works use to achieve lightweight, low-communication zero-knowledge verification of secret-shared vectors. An arithmetic sketching scheme for a language \(\mathcal {L}\subseteq \mathbb {F}^n\) consists of (1) a randomized linear function compressing a long input x to a short “sketch,” and (2) a small arithmetic circuit that accepts the sketch if and only if \(x \in \mathcal {L}\), up to some small error. If the language \(\mathcal {L}\) has an arithmetic sketching scheme with short sketches, then it is possible to test membership in \(\mathcal {L}\) using an arithmetic circuit with few multiplication gates. Since multiplications are the dominant cost in protocols for computation on secret-shared, encrypted, and committed data, arithmetic sketching schemes give rise to lightweight protocols in each of these settings.
> 
> Beyond the formalization of arithmetic sketching, our contributions are:
> 
> A general framework for constructing arithmetic sketching schemes from algebraic varieties. This framework unifies schemes from prior work and gives rise to schemes for useful new languages and with improved soundness error.
> 
> The first arithmetic sketching schemes for languages of sparse vectors: vectors with bounded Hamming weight, bounded \(L_1\) norm, and vectors whose few non-zero values satisfy a given predicate.
> 
> A method for “compiling” any arithmetic sketching scheme for a language \(\mathcal {L}\) into a low-communication malicious-secure multi-server protocol for securely testing that a client-provided secret-shared vector is in \(\mathcal {L}\).
> 
> We also prove the first nontrivial lower bounds showing limits on the sketch size for certain languages (e.g., vectors of Hamming-weight one) and proving the non-existence of arithmetic sketching schemes for others (e.g., the language of all vectors that contain a specific value).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_6](https://doi.org/10.1007/978-3-031-38557-5_6)
## Additive Randomized Encodings and Their Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#additive-randomized-encodings-and-their-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#additive-randomized-encodings-and-their-applications)
### Authors
* Shai Halevi, Algorand, New York, USA
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Eyal Kushilevitz, Technion - Israel Institute of Technology, Haifa, Israel
* Tal Rabin, University of Pennsylvania, Philadelphia, USA
### Abstract
> Addition of n inputs is often the easiest nontrivial function to compute securely. Motivated by several open questions, we ask what can be computed securely given only an oracle that computes the sum. Namely, what functions can be computed in a model where parties can only encode their input locally, then sum up the encodings over some Abelian group \({\mathbb G}\), and decode the result to get the function output.
> 
> An additive randomized encoding (ARE) of a function \(f(x_1,\ldots ,x_n)\) maps every input \(x_i\) independently into a randomized encoding \(\hat{x}_i\), such that \(\sum _{i=1}^n\) \(\hat{x}_i\) reveals \(f(x_1,\ldots ,x_n)\) and nothing else about the inputs. In a robust ARE, the sum of any subset of the \(\hat{x}_i\) only reveals the residual function obtained by restricting the corresponding inputs.
> 
> We obtain positive and negative results on ARE. In particular:
> 
> Information-theoretic ARE. We fully characterize the 2-party functions \(f:X_1\times X_2\rightarrow \{0,1\}\) admitting a perfectly secure ARE. For \(n\ge 3\) parties, we show a useful “capped sum” function that separates statistical security from perfect security.
> 
> Computational ARE. We present a general feasibility result, showing that all functions can be computed in this model, under a standard hardness assumption in bilinear groups. We also describe a heuristic lattice-based construction.
> 
> Robust ARE. We present a similar feasibility result for robust computational ARE based on ideal obfuscation along with standard cryptographic assumptions.
> 
> We then describe several applications of ARE and the above results.
> 
> Under a standard cryptographic assumption, our computational ARE schemes imply the feasibility of general non-interactive secure computation in the shuffle model, where messages from different parties are shuffled. This implies a general utility-preserving compiler from differential privacy in the central model to computational differential privacy in the (non-robust) shuffle model.
> 
> The existence of information-theoretic robust ARE implies “best-possible” information-theoretic MPC protocols (Halevi et al., TCC 2018) and degree-2 multiparty randomized encodings (Applebaum et al., TCC 2018). This yields new positive results for specific functions in the former model, as well as a simple unifying barrier for obtaining negative results in both models.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_7](https://doi.org/10.1007/978-3-031-38557-5_7)
## How to Recover a Secret with O(n) Additions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#how-to-recover-a-secret-with-o-n-additions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#how-to-recover-a-secret-with-o-n-additions)
### Authors
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Oded Nir, Tel Aviv University, Tel Aviv, Israel
* Benny Pinkas, Aptos Labs and Bar Ilan University, Ramat Gan, Israel
### Abstract
> Threshold cryptography is typically based on the idea of secret-sharing a private-key \(s\in F\) “in the exponent” of some cryptographic group G, or more generally, encoding s in some linearly homomorphic domain. In each invocation of the threshold system (e.g., for signing or decrypting) an “encoding” of the secret is being recovered and so the complexity, measured as the number of group multiplications over G, is equal to the number of F-additions that are needed to reconstruct the secret. Motivated by this scenario, we initiate the study of n-party secret-sharing schemes whose reconstruction algorithm makes a minimal number of additions. The complexity of existing schemes either scales linearly with \(n\log |F|\) (e.g., Shamir, CACM’79) or, at least, quadratically with n independently of the size of the domain F (e.g., Cramer-Xing, EUROCRYPT ’20). This leaves open the existence of a secret sharing whose recovery algorithm can be computed by performing only O(n) additions.
> 
> We resolve the question in the affirmative and present such a near-threshold secret sharing scheme that provides privacy against unauthorized sets of density at most \(\tau _p\), and correctness for authorized sets of density at least \(\tau _c\), for any given arbitrarily close constants \(\tau _p<\tau _c\). Reconstruction can be computed by making at most O(n) additions and, in addition, (1) the share size is constant, (2) the sharing procedure also makes only O(n) additions, and (3) the scheme is a blackbox secret-sharing scheme, i.e., the sharing and reconstruction algorithms work universally for all finite abelian groups F. Prior to our work, no such scheme was known even without features (1)–(3) and even for the ramp setting where \(\tau _p\) and \(\tau _c\) are far apart. As a by-product, we derive the first blackbox near-threshold secret-sharing scheme with linear-time sharing. We also present several concrete instantiations of our approach that seem practically efficient (e.g., for threshold discrete-log-based signatures).
> 
> Our constructions are combinatorial in nature. We combine graph-based erasure codes that support “peeling-based” decoding with a new randomness extraction method that is based on inner-product with a small-integer vector. We also introduce a general concatenation-like transform for secret-sharing schemes that allows us to arbitrarily shrink the privacy-correctness gap with a minor overhead. Our techniques enrich the secret-sharing toolbox and, in the context of blackbox secret sharing, provide a new alternative to existing number-theoretic approaches.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_8](https://doi.org/10.1007/978-3-031-38557-5_8)
## On Linear Communication Complexity for (Maximally) Fluid MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#on-linear-communication-complexity-for-maximally-fluid-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#on-linear-communication-complexity-for-maximally-fluid-mpc)
### Authors
* Alexander Bienstock, New York University, New York, USA
* Daniel Escudero, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, USA
### Abstract
> Secure multiparty computation protocols with dynamic parties, which assume that honest parties do not need to be online throughout the whole execution of the protocol, have recently gained a lot of traction for computations of large scale distributed protocols, such as blockchains. More specifically, in Fluid MPC, introduced in (Choudhuri et al. CRYPTO 2021), parties can dynamically join and leave the computation from round to round. The best known Fluid MPC protocol in the honest majority setting communicates \(O(n^2)\) elements per gate where n is the number of parties online at a time. While Le Mans (Rachuri and Scholl, CRYPTO 2022) extends Fluid MPC to the dishonest majority setting with preprocessing, it still communicates \(O(n^2)\) elements per gate.
> 
> In this work we present alternative Fluid MPC solutions that require O(n) communication per gate for both the information-theoretic honest majority setting and the information-theoretic dishonest majority setting with preprocessing. Our solutions also achieve maximal fluidity where parties only need to be online for a single communication round. Additionally, we show that a protocol in the information-theoretic dishonest majority setting with sub-quadratic \(o(n^2)\) overhead per gate requires for each of the N parties who may ever participate in the (later) execution phase, \(\varOmega (N)\) preprocessed data per gate.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_9](https://doi.org/10.1007/978-3-031-38557-5_9)
## Cryptography with Weights: MPC, Encryption and Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#cryptography-with-weights-mpc-encryption-and-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#cryptography-with-weights-mpc-encryption-and-signatures)
### Authors
* Sanjam Garg, UC Berkeley and NTT Research, Berkeley, USA
* Abhishek Jain, John Hopkins University, Baltimore, USA
* Pratyay Mukherjee, Supra Research, Kelowna, Canada
* Rohit Sinha, Swirlds Labs, Dallas, USA
* Mingyuan Wang, UC Berkeley, Berkeley, USA
* Yinuo Zhang, UC Berkeley, Berkeley, USA
### Abstract
> The security of many powerful cryptographic systems such as secure multiparty computation, threshold encryption, and threshold signatures rests on trust assumptions about the parties. The de-facto model treats all parties equally and requires that a certain fraction of the parties are honest. While this paradigm of one-person-one-vote has been very successful over the years, current and emerging practical use cases suggest that it is outdated.
> 
> In this work, we consider weighted cryptosystems where every party is assigned a certain weight and the trust assumption is that a certain fraction of the total weight is honest. This setting can be translated to the standard setting (where each party has a unit weight) via virtualization. However, this method is quite expensive, incurring a multiplicative overhead in the weight.
> 
> We present new weighted cryptosystems with significantly better efficiency: our proposed schemes incur only an additive overhead in weights.
> 
> We first present a weighted ramp secret-sharing scheme (WRSS) where the size of a secret share is O(w) (where w corresponds to the weight). In comparison, Shamir’s secret sharing with virtualization requires secret shares of size \(w\cdot \lambda \), where \(\lambda =\log |{\mathbb {F}}|\) is the security parameter.
> 
> Next, we use our WRSS to construct weighted versions of (semi-honest) secure multiparty computation (MPC), threshold encryption, and threshold signatures. All these schemes inherit the efficiency of our WRSS and incur only an additive overhead in weights.
> 
> Our WRSS is based on the Chinese remainder theorem-based secret-sharing scheme. Interestingly, this secret-sharing scheme is non-linear and only achieves statistical privacy. These distinct features introduce several technical hurdles in applications to MPC and threshold cryptosystems. We resolve these challenges by developing several new ideas.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_10](https://doi.org/10.1007/978-3-031-38557-5_10)
## Best of Both Worlds - Revisiting the Spymasters Double Agent Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#best-of-both-worlds-revisiting-the-spymasters-double-agent-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#best-of-both-worlds-revisiting-the-spymasters-double-agent-problem)
### Authors
* Anasuya Acharya, Bar-Ilan University, Ramat Gan, Israel
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Oxana Poburinnaya, Bar-Ilan University, Ramat Gan, Israel
* Oxana Poburinnaya, Georgetown University, Washington D.C., District of Columbia, USA
* Muthuramakrishnan Venkitasubramaniam, Georgetown University, Washington D.C., District of Columbia, USA
### Abstract
> This work introduces the notion of secure multiparty computation: MPC with fall-back security. Fall-back security for an n-party protocol is defined with respect to an adversary structure \(\mathcal{Z}\) wherein security is guaranteed in the presence of both a computationally unbounded adversary with adversary structure \(\mathcal{Z}\), and a computationally bounded adversary corrupting an arbitrarily large subset of the parties. This notion was considered in the work of Chaum (Crypto 89) via the Spymaster’s double agent problem where he showed a semi-honest secure protocol for the honest majority adversary structure.
> 
> Our first main result is a compiler that can transform any n-party protocol that is semi-honestly secure with statistical security tolerating an adversary structure \(\mathcal{Z}\) to one that (additionally) provides semi-honest fall-back security w.r.t \(\mathcal{Z}\). The resulting protocol has optimal round complexity, up to a constant factor, and is optimal in assumptions and the adversary structure. Our second result fully characterizes when malicious fall-back security is feasible. More precisely, we show that malicious fallback secure protocol w.r.t \(\mathcal{Z}\) exists if and only if \(\mathcal{Z}\) admits unconditional MPC against a semi-honest adversary (namely, iff \(\mathcal{Z}\in \mathcal{Q}^2\)).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_11](https://doi.org/10.1007/978-3-031-38557-5_11)
## Perfect MPC over Layered Graphs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#perfect-mpc-over-layered-graphs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#perfect-mpc-over-layered-graphs)
### Authors
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Anders Konring, IT University of Copenhagen, Copenhagen, Denmark
* Giovanni Deligios, ETH Zurich, Zürich, Switzerland
* Aarushi Goel, NTT Research, Sunnyvale, USA
* Chen-Da Liu-Zhang, NTT Research, Sunnyvale, USA
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Eyal Kushilevitz, Technion - Israel Institute of Technology, Haifa, Israel
* Varun Narayanan, Technion - Israel Institute of Technology, Haifa, Israel
### Abstract
> The classical “BGW protocol” (Ben-Or, Goldwasser, and Wigderson, STOC 1988) shows that secure multiparty computation (MPC) among n parties can be realized with perfect full security if \(t < n/3\) parties are corrupted. This holds against malicious adversaries in the “standard” model for MPC, where a fixed set of n parties is involved in the full execution of the protocol. However, the picture is less clear in the mobile adversary setting of Ostrovsky and Yung (PODC 1991), where the adversary may periodically “move” by uncorrupting parties and corrupting a new set of t parties. In this setting, it is unclear if full security can be achieved against an adversary that is maximally mobile, i.e., moves after every round. The question is further motivated by the “You Only Speak Once” (YOSO) setting of Gentry et al. (Crypto 2021), where not only the adversary is mobile but also each round is executed by a disjoint set of parties. Previous positive results in this model do not achieve perfect security, and either assume probabilistic corruption and a nonstandard communication model, or only realize the weaker goal of security-with-abort. The question of matching the BGW result in these settings remained open.
> 
> In this work, we tackle the above two challenges simultaneously. We consider a layered MPC model, a simplified variant of the fluid MPC model of Choudhuri et al. (Crypto 2021). Layered MPC is an instance of standard MPC where the interaction pattern is defined by a layered graph of width n, allowing each party to send secret messages and broadcast messages only to parties in the next layer. We require perfect security against a malicious adversary who may corrupt at most t parties in each layer. Our main result is a perfect, fully secure layered MPC protocol with an optimal corruption threshold of \(t < n/3\), thus extending the BGW feasibility result to the layered setting. This implies perfectly secure MPC protocols against a maximally mobile adversary.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_12](https://doi.org/10.1007/978-3-031-38557-5_12)
## Round-Optimal Black-Box MPC in the Plain Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#round-optimal-black-box-mpc-in-the-plain-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#round-optimal-black-box-mpc-in-the-plain-model)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Bengaluru, India
### Abstract
> We give the first construction of a (fully) black-box round-optimal secure multiparty computation protocol in the plain model. Our protocol makes black-box use of a sub-exponentially secure two-message statistical sender private oblivious transfer (SSP-OT), which in turn can be based on (sub-exponential variants of) most of the standard cryptographic assumptions known to imply public-key cryptography.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_13](https://doi.org/10.1007/978-3-031-38557-5_13)
## Reusable Secure Computation in the Plain Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#reusable-secure-computation-in-the-plain-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#reusable-secure-computation-in-the-plain-model)
### Authors
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Vipul Goyal, CMU, Pittsburgh, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
* Mingyuan Wang, UC Berkeley, Berkeley, USA
### Abstract
> Consider the standard setting of two-party computation where the sender has a secret function f and the receiver has a secret input x and the output f(x) is delivered to the receiver at the end of the protocol. Let us consider the unidirectional message model where only one party speaks in each round. In this setting, Katz and Ostrovsky (Crypto 2004) showed that at least four rounds of interaction between the parties are needed in the plain model (i.e., no trusted setup) if the simulator uses the adversary in a black-box way (a.k.a. black-box simulation). Suppose the sender and the receiver would like to run multiple sequential iterations of the secure computation protocol on possibly different inputs. For each of these iterations, do the parties need to start the protocol from scratch and exchange four messages?
> 
> In this work, we explore the possibility of amortizing the round complexity or in other words, reusing a certain number of rounds of the secure computation protocol in the plain model. We obtain the following results.
> 
> Under standard cryptographic assumptions, we construct a four-round two-party computation protocol where (i) the first three rounds of the protocol could be reused an unbounded number of times if the receiver input remains the same and only the sender input changes, and (ii) the first two rounds of the protocol could be reused an unbounded number of times if the receiver input needs to change as well. In other words, the sender sends a single additional message if only its input changes, and in the other case, we need one message each from the receiver and the sender. The number of additional messages needed in each of the above two modes is optimal and, additionally, our protocol allows arbitrary interleaving of these two modes.
> 
> We also extend these results to the multiparty setting (in the simultaneous message exchange model) and give round-optimal protocols such that (i) the first two rounds could be reused an unbounded number of times if the inputs of the parties need to change and (ii) the first three rounds could be reused an unbounded number of times if the inputs remain the same but the functionality to be computed changes. As in the two-party setting, we allow arbitrary interleaving of the above two modes of operation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_14](https://doi.org/10.1007/978-3-031-38557-5_14)
## List Oblivious Transfer and Applications to Round-Optimal Black-Box Multiparty Coin Tossing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#list-oblivious-transfer-and-applications-to-round-optimal-black-box-multiparty-coin-tossing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#list-oblivious-transfer-and-applications-to-round-optimal-black-box-multiparty-coin-tossing)
### Authors
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Rafail Ostrovsky, University of California, Los Angeles, USA
* Luisa Siniscalchi, Danish Technical University, Copenhagen, Denmark
* Hendrik Waldner, University of Maryland, College Park, USA
* Hendrik Waldner, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> In this work we study the problem of minimizing the round complexity for securely evaluating multiparty functionalities while making black-box use of polynomial time assumptions. In Eurocrypt 2016, Garg et al. showed that assuming all parties have access to a broadcast channel, then at least four rounds of communication are required to securely realize non-trivial functionalities in the plain model.
> 
> A sequence of works follow-up the result of Garg et al. matching this lower bound under a variety of assumptions. Unfortunately, none of these works make black-box use of the underlying cryptographic primitives. In Crypto 2021, Ishai, Khurana, Sahai, and Srinivasan came closer to matching the four-round lower bound, obtaining a five-round protocol that makes black-box use of oblivious transfer and PKE with pseudorandom public keys.
> 
> In this work, we show how to realize any input-less functionality (e.g., coin-tossing, generation of key-pairs, and so on) in four rounds while making black-box use of two-round oblivious transfer. As an additional result, we construct the first four-round MPC protocol for generic functionalities that makes black-box use of the underlying primitives, achieving security against non-aborting adversaries.
> 
> Our protocols are based on a new primitive called list two-party computation. This primitive offers relaxed security compared to the standard notion of secure two-party computation. Despite this relaxation, we argue that this tool suffices for our applications. List two-party computation is of independent interest, as we argue it can also be used for the generation of setups, like oblivious transfer correlated randomness, in three rounds. Prior to our work, generating such a setup required at least four rounds of interactions or a trusted third party.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_15](https://doi.org/10.1007/978-3-031-38557-5_15)
## Security-Preserving Distributed Samplers: How to Generate Any CRS in One Round Without Random Oracles.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#security-preserving-distributed-samplers-how-to-generate-any-crs-in-one-round-without-random-oracles)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#security-preserving-distributed-samplers-how-to-generate-any-crs-in-one-round-without-random-oracles)
### Authors
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Brent Waters, University of Texas at Austin, Austin, USA
* Brent Waters, NTT Research, Tokyo, Japan
* Mark Zhandry, NTT Research, Tokyo, Japan
### Abstract
> A distributed sampler is a way for several mutually distrusting parties to non-interactively generate a common reference string (CRS) that all parties trust. Previous work constructs distributed samplers in the random oracle model, or in the standard model with very limited security guarantees. This is no accident, as standard model distributed samplers with full security were shown impossible.
> 
> In this work, we provide new definitions for distributed samplers which we show achieve meaningful security guarantees in the standard model. In particular, our notion implies that the hardness of a wide range of security games is preserved when the CRS is replaced with a distributed sampler. We also show how to realize our notion of distributed samplers. A core technical tool enabling our construction is a new notion of single-message zero knowledge.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_16](https://doi.org/10.1007/978-3-031-38557-5_16)
## One-Message Secure Reductions: On the Cost of Converting Correlations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#one-message-secure-reductions-on-the-cost-of-converting-correlations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#one-message-secure-reductions-on-the-cost-of-converting-correlations)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Varun Narayanan, Technion, Haifa, Israel
* Liav Zafar, Technion, Haifa, Israel
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Mahimna Kelkar, Cornell Tech, New York, USA
### Abstract
> Correlated secret randomness is a useful resource for secure computation protocols, often enabling dramatic speedups compared to protocols in the plain model. This has motivated a line of work on identifying and securely generating useful correlations.
> 
> Different kinds of correlations can vary greatly in terms of usefulness and ease of generation. While there has been major progress on efficiently generating oblivious transfer (OT) correlations, other useful kinds of correlations are much more costly to generate. Thus, it is highly desirable to develop efficient techniques for securely converting copies of a given source correlation into copies of a given target correlation, especially when the former are cheaper to generate than the latter.
> 
> In this work, we initiate a systematic study of such conversions that only involve a single uni-directional message. We refer to such a conversion as a one-message secure reduction (OMSR). Recent works (Agarwal et al., Eurocrypt 2022; Khorasgani et al., Eurocrypt 2022) studied a similar problem when no communication is allowed; this setting is quite restrictive, however, with few non-trivial conversions being feasible. The OMSR setting substantially expands the scope of feasible results, allowing for direct applications to existing MPC protocols.
> 
> We obtain the following positive and negative results.
> 
> OMSR constructions. We present a general rejection-sampling based technique for OMSR with OT source correlations. We apply it to substantially improve in the communication complexity of optimized protocols for distributed symmetric cryptography (Dinur et al., Crypto 2021).
> 
> OMSR lower bounds. We develop general techniques for proving lower bounds on the communication complexity of OMSR, matching our positive results up to small constant factors.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_17](https://doi.org/10.1007/978-3-031-38557-5_17)
## A Framework for Statistically Sender Private OT with Optimal Rate.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#a-framework-for-statistically-sender-private-ot-with-optimal-rate)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#a-framework-for-statistically-sender-private-ot-with-optimal-rate)
### Authors
* Pedro Branco, Max Planck Institute for Security and Privacy, Bochum, Germany
* Nico Döttling, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### Abstract
> Statistical sender privacy (SSP) is the strongest achievable security notion for two-message oblivious transfer (OT) in the standard model, providing statistical security against malicious receivers and computational security against semi-honest senders. In this work we provide a novel construction of SSP OT from the Decisional Diffie-Hellman (DDH) and the Learning Parity with Noise (LPN) assumptions achieving (asymptotically) optimal amortized communication complexity, i.e. it achieves rate 1. Concretely, the total communication complexity for k OT instances is \(2k(1+o(1))\), which (asymptotically) approaches the information-theoretic lower bound. Previously, it was only known how to realize this primitive using heavy rate-1 FHE techniques [Brakerski et al., Gentry and Halevi TCC’19].
> 
> At the heart of our construction is a primitive called statistical co-PIR, essentially a a public key encryption scheme which statistically erases bits of the message in a few hidden locations. Our scheme achieves nearly optimal ciphertext size and provides statistical security against malicious receivers. Computational security against semi-honest senders holds under the DDH assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_18](https://doi.org/10.1007/978-3-031-38557-5_18)
## Malicious Secure, Structure-Aware Private Set Intersection.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#malicious-secure-structure-aware-private-set-intersection)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#malicious-secure-structure-aware-private-set-intersection)
### Authors
* Gayathri Garimella, Oregon State University, Corvallis, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Jaspal Singh, Oregon State University, Corvallis, USA
### Abstract
> Structure-Aware private set intersection (sa-PSI) is a variant of PSI where Alice’s input set A has some publicly known structure, Bob’s input B is an unstructured set of points, and Alice learns the intersection \(A \cap B\). sa-PSI was recently introduced by Garimella et al. (Crypto 2022), who described a semi-honest protocol with communication that scales with the description size of Alice’s set, instead of its cardinality. In this paper, we present the first sa-PSI protocol secure against malicious adversaries.
> 
> sa-PSI protocols are built from function secret sharing (FSS) schemes, and the main challenge in our work is ensuring that multiple FSS sharings encode the same structured set. We do so using a cut-and-choose approach. In order to make FSS compatible with cut-and-choose, we introduce a new variant of function secret sharing, called derandomizable FSS (dFSS).
> 
> We show how to construct dFSS for union of geometric balls, leading to a malicious-secure sa-PSI protocol where Alice’s input is a union of balls. We also improve prior FSS constructions, giving asymptotic improvements to semi-honest sa-PSI.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_19](https://doi.org/10.1007/978-3-031-38557-5_19)
## Secure Multiparty Computation from Threshold Encryption Based on Class Groups.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#secure-multiparty-computation-from-threshold-encryption-based-on-class-groups)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#secure-multiparty-computation-from-threshold-encryption-based-on-class-groups)
### Authors
* Lennart Braun, Aarhus University, Aarhus, Denmark
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
### Abstract
> We construct the first actively-secure threshold version of the cryptosystem based on class groups from the so-called CL framework (Castagnos and Laguillaumie, 2015).
> 
> We show how to use our threshold scheme to achieve general universally composable (UC) secure multiparty computation (MPC) with only transparent set-up, i.e., with no secret trapdoors involved.
> 
> On the way to our goal, we design new zero-knowledge (ZK) protocols with constant communication complexity for proving multiplicative relations between encrypted values. This allows us to use the ZK proofs to achieve MPC with active security with only a constant factor overhead.
> 
> Finally, we adapt our protocol for the so called “You-Only-Speak-Once” (YOSO) setting, which is a very promising recent approach for performing MPC over a blockchain. This is possible because our key generation protocol is simpler and requires significantly less interaction compared to previous approaches: in particular, our new key generation protocol allows the adversary to bias the public key, but we show that this has no impact on the security of the resulting cryptosystem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_20](https://doi.org/10.1007/978-3-031-38557-5_20)
## Two-Round Stateless Deterministic Two-Party Schnorr Signatures from Pseudorandom Correlation Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#two-round-stateless-deterministic-two-party-schnorr-signatures-from-pseudorandom-correlation-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#two-round-stateless-deterministic-two-party-schnorr-signatures-from-pseudorandom-correlation-functions)
### Authors
* Yashvanth Kondi, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Lawrence Roy, Aarhus University, Aarhus, Denmark
### Abstract
> Schnorr signatures are a popular choice due to their simplicity, provable security, and linear structure that enables relatively easy threshold signing protocols. The deterministic variant of Schnorr (where the nonce is derived in a stateless manner using a PRF from the message and a long term secret) is widely used in practice since it mitigates the threats of a faulty or poor randomness generator (which in Schnorr leads to catastrophic breaches of security). Unfortunately, threshold protocols for the deterministic variant of Schnorr have so far been quite inefficient, as they make non black-box use of the PRF involved in the nonce generation.
> 
> In this paper, we present the first two-party threshold protocol for Schnorr signatures, where signing is stateless and deterministic, and only makes black-box use of the underlying cryptographic algorithms.
> 
> We present a protocol from general assumptions which achieves covert security, and a protocol that achieves full active security under standard factoring-like assumptions. Our protocols make crucial use of recent advances within the field of pseudorandom correlation functions (PCFs).
> 
> As an additional benefit, only two-rounds are needed to perform distributed signing in our protocol, connecting our work to a recent line of research on the trade-offs between round complexity and cryptographic assumptions for threshold Schnorr signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_21](https://doi.org/10.1007/978-3-031-38557-5_21)
## Fully Adaptive Schnorr Threshold Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#fully-adaptive-schnorr-threshold-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#fully-adaptive-schnorr-threshold-signatures)
### Authors
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Chelsea Komlo, University of Waterloo & Zcash Foundation, Waterloo, Canada
* Mary Maller, Ethereum Foundation & PQShield, London, UK
### Abstract
> We prove adaptive security of a simple three-round threshold Schnorr signature scheme, which we call \(\textsf{Sparkle}\). The standard notion of security for threshold signatures considers a static adversary – one who must declare which parties are corrupt at the beginning of the protocol. The stronger adaptive adversary can at any time corrupt parties and learn their state. This notion is natural and practical, yet not proven to be met by most schemes in the literature.
> 
> In this paper, we demonstrate that \(\textsf{Sparkle}\) achieves several levels of security based on different corruption models and assumptions. To begin with, \(\textsf{Sparkle}\) is statically secure under minimal assumptions: the discrete logarithm assumption (DL) and the random oracle model (ROM). If an adaptive adversary corrupts fewer than \(t/2\) out of a threshold of \(t+1\) signers, then \(\textsf{Sparkle}\) is adaptively secure under a weaker variant of the one-more discrete logarithm assumption (AOMDL) in the ROM. Finally, we prove that \(\textsf{Sparkle}\) achieves full adaptive security, with a corruption threshold of \(t\), under AOMDL in the algebraic group model (AGM) with random oracles. Importantly, we show adaptive security without requiring secure erasures. Ours is the first proof achieving full adaptive security without exponential tightness loss for any threshold Schnorr signature scheme; moreover, the reduction is tight.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_22](https://doi.org/10.1007/978-3-031-38557-5_22)
## Snowblind: A Threshold Blind Signature in Pairing-Free Groups.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#snowblind-a-threshold-blind-signature-in-pairing-free-groups)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#snowblind-a-threshold-blind-signature-in-pairing-free-groups)
### Authors
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Chelsea Komlo, University of Waterloo, Waterloo, Canada
* Chelsea Komlo, Zcash Foundation, McLean, USA
* Mary Maller, Ethereum Foundation, Zug, Switzerland
* Mary Maller, PQShield, Oxford, UK
* Stefano Tessaro, Paul G. Allen School of Computer Science and Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science and Engineering, University of Washington, Seattle, USA
### Abstract
> Both threshold and blind signatures have, individually, received a considerable amount of attention. However little is known about their combination, i.e., a threshold signature which is also blind, in that no coalition of signers learns anything about the message being signed or the signature being produced. Several applications of blind signatures (e.g., anonymous tokens) would benefit from distributed signing as a means to increase trust in the service and hence reduce the risks of key compromise. This paper builds the first blind threshold signatures in pairing-free groups. Our main contribution is a construction that transforms an underlying blind non-threshold signature scheme with a suitable structure into a threshold scheme, preserving its blindness. The resulting signing protocol proceeds in three rounds, and produces signatures consisting of one group element and two scalars. The underlying non-threshold blind signature schemes are of independent interest, and improve upon the current state of the art (Tessaro and Zhu, EUROCRYPT ’22) with shorter signatures (three elements, instead of four) and simpler proofs of security. All of our schemes are proved secure in the Random Oracle and Algebraic Group Models, assuming the hardness of the discrete logarithm problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_23](https://doi.org/10.1007/978-3-031-38557-5_23)
## Practical Schnorr Threshold Signatures Without the Algebraic Group Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-1].md#practical-schnorr-threshold-signatures-without-the-algebraic-group-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#practical-schnorr-threshold-signatures-without-the-algebraic-group-model)
### Authors
* Hien Chu, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Paul Gerhart, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Dominique Schröder, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Tim Ruffing, Blockstream Research, Victoria, Canada
### Abstract
> Threshold signatures are digital signature schemes in which a set of n signers specify a threshold t such that any subset of size t is authorized to produce signatures on behalf of the group. There has recently been a renewed interest in this primitive, largely driven by the need to secure highly valuable signing keys, e.g., DNSSEC keys or keys protecting digital wallets in the cryptocurrency ecosystem. Of special interest is FROST, a practical Schnorr threshold signature scheme, which is currently undergoing standardization in the IETF and whose security was recently analyzed at CRYPTO’22.
> 
> We continue this line of research by focusing on FROST’s unforgeability combined with a practical distributed key generation (DKG) algorithm. Existing proofs of this setup either use non-standard heuristics, idealized group models like the AGM, or idealized key generation. Moreover, existing proofs do not consider all practical relevant optimizations that have been proposed. We close this gap between theory and practice by presenting the Schnorr threshold signature scheme \(\textsf{Olaf} \), which combines the most efficient known FROST variant \(\textsf{FROST3} \) with a variant of Pedersen’s DKG protocol (as commonly used for FROST), and prove its unforgeability. Our proof relies on the AOMDL assumption (a weaker and falsifiable variant of the OMDL assumption) and, like proofs of regular Schnorr signatures, on the random oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_24](https://doi.org/10.1007/978-3-031-38557-5_24)
