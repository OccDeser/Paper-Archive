# Crypto 23-1
## Completeness Theorems for Adaptively Secure Broadcast.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#completeness-theorems-for-adaptively-secure-broadcast)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#completeness-theorems-for-adaptively-secure-broadcast)
### Authors
* Ran Cohen, Efi Arazi School of Computer Science, Reichman University, Herzliya, Israel
* Juan Garay, Texas A&M University, College Station, USA
* Vassilis Zikas, Purdue University, West Lafayette, USA
### Abstract
> The advent of blockchain protocols has reignited the interest in adaptively secure broadcast; it is by now well understood that broadcasting over a diffusion network allows an adaptive adversary to corrupt the sender depending on the message it attempts to send and change it. Hirt and Zikas [Eurocrypt ’10] proved that this is an inherent limitation of broadcast in the simulation-based setting—i.e., this task is impossible against an adaptive adversary corrupting a majority of the parties (a task that is achievable against a static adversary).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_1](https://doi.org/10.1007/978-3-031-38557-5_1)
## Bingo: Adaptivity and Asynchrony in Verifiable Secret Sharing and Distributed Key Generation.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#bingo-adaptivity-and-asynchrony-in-verifiable-secret-sharing-and-distributed-key-generation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#bingo-adaptivity-and-asynchrony-in-verifiable-secret-sharing-and-distributed-key-generation)
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
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#network-agnostic-security-comes-almost-for-free-in-dkg-and-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#network-agnostic-security-comes-almost-for-free-in-dkg-and-mpc)
### Authors
* Renas Bacho, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Renas Bacho, Saarland University, Saarbrücken, Germany
* Daniel Collins, EPFL, Lausanne, Switzerland
* Chen-Da Liu-Zhang, Luzern University of Applied Sciences and Arts, Lucerne, Switzerland
* Chen-Da Liu-Zhang, Web3 Foundation, Houston, USA
### Abstract
> Distributed key generation (DKG) protocols are an essential building block for threshold cryptosystems. Many DKG protocols tolerate up to \(t_s<n/2\) corruptions assuming a well-behaved synchronous network, but become insecure as soon as the network delay becomes unstable. On the other hand, solutions in the asynchronous model operate under arbitrary network conditions, but only tolerate \(t_a<n/3\) corruptions, even when the network is well-behaved.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_3](https://doi.org/10.1007/978-3-031-38557-5_3)
## Practical Settlement Bounds for Longest-Chain Consensus.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#practical-settlement-bounds-for-longest-chain-consensus)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#practical-settlement-bounds-for-longest-chain-consensus)
### Authors
* Peter Gaži, IOG, Bratislava, Slovakia
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Alexander Russell, University of Connecticut and IOG, Storrs, CT, USA
### Abstract
> Nakamoto’s longest-chain consensus paradigm now powers the bulk of the world’s cryptocurrencies and distributed finance infrastructure. An emblematic property of longest-chain consensus is that it provides probabilistic settlement guarantees that strengthen over time. This makes the exact relationship between settlement error and settlement latency a critical aspect of the protocol that both users and system designers must understand to make informed decisions. A recent line of work has finally provided a satisfactory rigorous accounting of this relationship for proof-of-work longest-chain protocols, but those techniques do not appear to carry over to the proof-of-stake setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_4](https://doi.org/10.1007/978-3-031-38557-5_4)
## New Bounds on the Local Leakage Resilience of Shamir's Secret Sharing Scheme.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#new-bounds-on-the-local-leakage-resilience-of-shamirs-secret-sharing-scheme)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#new-bounds-on-the-local-leakage-resilience-of-shamirs-secret-sharing-scheme)
### Authors
* Ohad Klein, Hebrew University of Jerusalem, Jerusalem, Israel
* Ilan Komargodski, Hebrew University of Jerusalem, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### Abstract
> We study the local leakage resilience of Shamir’s secret sharing scheme. In Shamir’s scheme, a random polynomial f of degree t is sampled over a field of size \(p>n\), conditioned on \(f(0)=s\) for a secret s. Any t shares (i, f(i)) can be used to fully recover f and thereby f(0). But, any \(t-1\) evaluations of f at non-zero coordinates are completely independent of f(0). Recent works ask whether the secret remains hidden even if say only 1 bit of information is leaked from each share, independently. This question is well motivated due to the wide range of applications of Shamir’s scheme. For instance, it is known that if Shamir’s scheme is leakage resilient in some range of parameters, then known secure computation protocols are secure in a local leakage model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_5](https://doi.org/10.1007/978-3-031-38557-5_5)
## Arithmetic Sketching.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#arithmetic-sketching)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#arithmetic-sketching)
### Authors
* Dan Boneh, Stanford University, Stanford, USA
* Elette Boyle, Reichman University, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Henry Corrigan-Gibbs, MIT, Cambridge, USA
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
### Abstract
> This paper introduces arithmetic sketching, an abstraction of a primitive that several previous works use to achieve lightweight, low-communication zero-knowledge verification of secret-shared vectors. An arithmetic sketching scheme for a language \(\mathcal {L}\subseteq \mathbb {F}^n\) consists of (1) a randomized linear function compressing a long input x to a short “sketch,” and (2) a small arithmetic circuit that accepts the sketch if and only if \(x \in \mathcal {L}\), up to some small error. If the language \(\mathcal {L}\) has an arithmetic sketching scheme with short sketches, then it is possible to test membership in \(\mathcal {L}\) using an arithmetic circuit with few multiplication gates. Since multiplications are the dominant cost in protocols for computation on secret-shared, encrypted, and committed data, arithmetic sketching schemes give rise to lightweight protocols in each of these settings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_6](https://doi.org/10.1007/978-3-031-38557-5_6)
## Additive Randomized Encodings and Their Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#additive-randomized-encodings-and-their-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#additive-randomized-encodings-and-their-applications)
### Authors
* Shai Halevi, Algorand, New York, USA
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Eyal Kushilevitz, Technion - Israel Institute of Technology, Haifa, Israel
* Tal Rabin, University of Pennsylvania, Philadelphia, USA
### Abstract
> Addition of n inputs is often the easiest nontrivial function to compute securely. Motivated by several open questions, we ask what can be computed securely given only an oracle that computes the sum. Namely, what functions can be computed in a model where parties can only encode their input locally, then sum up the encodings over some Abelian group \({\mathbb G}\), and decode the result to get the function output.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_7](https://doi.org/10.1007/978-3-031-38557-5_7)
## How to Recover a Secret with O(n) Additions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#how-to-recover-a-secret-with-o-n-additions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#how-to-recover-a-secret-with-o-n-additions)
### Authors
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Oded Nir, Tel Aviv University, Tel Aviv, Israel
* Benny Pinkas, Aptos Labs and Bar Ilan University, Ramat Gan, Israel
### Abstract
> Threshold cryptography is typically based on the idea of secret-sharing a private-key \(s\in F\) “in the exponent” of some cryptographic group G, or more generally, encoding s in some linearly homomorphic domain. In each invocation of the threshold system (e.g., for signing or decrypting) an “encoding” of the secret is being recovered and so the complexity, measured as the number of group multiplications over G, is equal to the number of F-additions that are needed to reconstruct the secret. Motivated by this scenario, we initiate the study of n-party secret-sharing schemes whose reconstruction algorithm makes a minimal number of additions. The complexity of existing schemes either scales linearly with \(n\log |F|\) (e.g., Shamir, CACM’79) or, at least, quadratically with n independently of the size of the domain F (e.g., Cramer-Xing, EUROCRYPT ’20). This leaves open the existence of a secret sharing whose recovery algorithm can be computed by performing only O(n) additions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_8](https://doi.org/10.1007/978-3-031-38557-5_8)
## On Linear Communication Complexity for (Maximally) Fluid MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#on-linear-communication-complexity-for-maximally-fluid-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#on-linear-communication-complexity-for-maximally-fluid-mpc)
### Authors
* Alexander Bienstock, New York University, New York, USA
* Daniel Escudero, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, USA
### Abstract
> Secure multiparty computation protocols with dynamic parties, which assume that honest parties do not need to be online throughout the whole execution of the protocol, have recently gained a lot of traction for computations of large scale distributed protocols, such as blockchains. More specifically, in Fluid MPC, introduced in (Choudhuri et al. CRYPTO 2021), parties can dynamically join and leave the computation from round to round. The best known Fluid MPC protocol in the honest majority setting communicates \(O(n^2)\) elements per gate where n is the number of parties online at a time. While Le Mans (Rachuri and Scholl, CRYPTO 2022) extends Fluid MPC to the dishonest majority setting with preprocessing, it still communicates \(O(n^2)\) elements per gate.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_9](https://doi.org/10.1007/978-3-031-38557-5_9)
## Cryptography with Weights: MPC, Encryption and Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#cryptography-with-weights-mpc-encryption-and-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#cryptography-with-weights-mpc-encryption-and-signatures)
### Authors
* Sanjam Garg, UC Berkeley and NTT Research, Berkeley, USA
* Abhishek Jain, John Hopkins University, Baltimore, USA
* Pratyay Mukherjee, Supra Research, Kelowna, Canada
* Rohit Sinha, Swirlds Labs, Dallas, USA
* Mingyuan Wang, UC Berkeley, Berkeley, USA
* Yinuo Zhang, UC Berkeley, Berkeley, USA
### Abstract
> The security of many powerful cryptographic systems such as secure multiparty computation, threshold encryption, and threshold signatures rests on trust assumptions about the parties. The de-facto model treats all parties equally and requires that a certain fraction of the parties are honest. While this paradigm of one-person-one-vote has been very successful over the years, current and emerging practical use cases suggest that it is outdated.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_10](https://doi.org/10.1007/978-3-031-38557-5_10)
## Best of Both Worlds - Revisiting the Spymasters Double Agent Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#best-of-both-worlds-revisiting-the-spymasters-double-agent-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#best-of-both-worlds-revisiting-the-spymasters-double-agent-problem)
### Authors
* Anasuya Acharya, Bar-Ilan University, Ramat Gan, Israel
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Oxana Poburinnaya, Bar-Ilan University, Ramat Gan, Israel
* Oxana Poburinnaya, Georgetown University, Washington D.C., District of Columbia, USA
* Muthuramakrishnan Venkitasubramaniam, Georgetown University, Washington D.C., District of Columbia, USA
### Abstract
> This work introduces the notion of secure multiparty computation: MPC with fall-back security. Fall-back security for an n-party protocol is defined with respect to an adversary structure \(\mathcal{Z}\) wherein security is guaranteed in the presence of both a computationally unbounded adversary with adversary structure \(\mathcal{Z}\), and a computationally bounded adversary corrupting an arbitrarily large subset of the parties. This notion was considered in the work of Chaum (Crypto 89) via the Spymaster’s double agent problem where he showed a semi-honest secure protocol for the honest majority adversary structure.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_11](https://doi.org/10.1007/978-3-031-38557-5_11)
## Perfect MPC over Layered Graphs.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#perfect-mpc-over-layered-graphs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#perfect-mpc-over-layered-graphs)
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

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_12](https://doi.org/10.1007/978-3-031-38557-5_12)
## Round-Optimal Black-Box MPC in the Plain Model.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#round-optimal-black-box-mpc-in-the-plain-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#round-optimal-black-box-mpc-in-the-plain-model)
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
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#reusable-secure-computation-in-the-plain-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#reusable-secure-computation-in-the-plain-model)
### Authors
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Vipul Goyal, CMU, Pittsburgh, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
* Mingyuan Wang, UC Berkeley, Berkeley, USA
### Abstract
> Consider the standard setting of two-party computation where the sender has a secret function f and the receiver has a secret input x and the output f(x) is delivered to the receiver at the end of the protocol. Let us consider the unidirectional message model where only one party speaks in each round. In this setting, Katz and Ostrovsky (Crypto 2004) showed that at least four rounds of interaction between the parties are needed in the plain model (i.e., no trusted setup) if the simulator uses the adversary in a black-box way (a.k.a. black-box simulation). Suppose the sender and the receiver would like to run multiple sequential iterations of the secure computation protocol on possibly different inputs. For each of these iterations, do the parties need to start the protocol from scratch and exchange four messages?

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_14](https://doi.org/10.1007/978-3-031-38557-5_14)
## List Oblivious Transfer and Applications to Round-Optimal Black-Box Multiparty Coin Tossing.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#list-oblivious-transfer-and-applications-to-round-optimal-black-box-multiparty-coin-tossing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#list-oblivious-transfer-and-applications-to-round-optimal-black-box-multiparty-coin-tossing)
### Authors
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Rafail Ostrovsky, University of California, Los Angeles, USA
* Luisa Siniscalchi, Danish Technical University, Copenhagen, Denmark
* Hendrik Waldner, University of Maryland, College Park, USA
* Hendrik Waldner, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> In this work we study the problem of minimizing the round complexity for securely evaluating multiparty functionalities while making black-box use of polynomial time assumptions. In Eurocrypt 2016, Garg et al. showed that assuming all parties have access to a broadcast channel, then at least four rounds of communication are required to securely realize non-trivial functionalities in the plain model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_15](https://doi.org/10.1007/978-3-031-38557-5_15)
## Security-Preserving Distributed Samplers: How to Generate Any CRS in One Round Without Random Oracles.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#security-preserving-distributed-samplers-how-to-generate-any-crs-in-one-round-without-random-oracles)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#security-preserving-distributed-samplers-how-to-generate-any-crs-in-one-round-without-random-oracles)
### Authors
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Brent Waters, University of Texas at Austin, Austin, USA
* Brent Waters, NTT Research, Tokyo, Japan
* Mark Zhandry, NTT Research, Tokyo, Japan
### Abstract
> A distributed sampler is a way for several mutually distrusting parties to non-interactively generate a common reference string (CRS) that all parties trust. Previous work constructs distributed samplers in the random oracle model, or in the standard model with very limited security guarantees. This is no accident, as standard model distributed samplers with full security were shown impossible.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_16](https://doi.org/10.1007/978-3-031-38557-5_16)
## One-Message Secure Reductions: On the Cost of Converting Correlations.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#one-message-secure-reductions-on-the-cost-of-converting-correlations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#one-message-secure-reductions-on-the-cost-of-converting-correlations)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Varun Narayanan, Technion, Haifa, Israel
* Liav Zafar, Technion, Haifa, Israel
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Mahimna Kelkar, Cornell Tech, New York, USA
### Abstract
> Correlated secret randomness is a useful resource for secure computation protocols, often enabling dramatic speedups compared to protocols in the plain model. This has motivated a line of work on identifying and securely generating useful correlations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_17](https://doi.org/10.1007/978-3-031-38557-5_17)
## A Framework for Statistically Sender Private OT with Optimal Rate.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#a-framework-for-statistically-sender-private-ot-with-optimal-rate)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#a-framework-for-statistically-sender-private-ot-with-optimal-rate)
### Authors
* Pedro Branco, Max Planck Institute for Security and Privacy, Bochum, Germany
* Nico Döttling, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### Abstract
> Statistical sender privacy (SSP) is the strongest achievable security notion for two-message oblivious transfer (OT) in the standard model, providing statistical security against malicious receivers and computational security against semi-honest senders. In this work we provide a novel construction of SSP OT from the Decisional Diffie-Hellman (DDH) and the Learning Parity with Noise (LPN) assumptions achieving (asymptotically) optimal amortized communication complexity, i.e. it achieves rate 1. Concretely, the total communication complexity for k OT instances is \(2k(1+o(1))\), which (asymptotically) approaches the information-theoretic lower bound. Previously, it was only known how to realize this primitive using heavy rate-1 FHE techniques [Brakerski et al., Gentry and Halevi TCC’19].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_18](https://doi.org/10.1007/978-3-031-38557-5_18)
## Malicious Secure, Structure-Aware Private Set Intersection.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#malicious-secure-structure-aware-private-set-intersection)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#malicious-secure-structure-aware-private-set-intersection)
### Authors
* Gayathri Garimella, Oregon State University, Corvallis, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Jaspal Singh, Oregon State University, Corvallis, USA
### Abstract
> Structure-Aware private set intersection (sa-PSI) is a variant of PSI where Alice’s input set A has some publicly known structure, Bob’s input B is an unstructured set of points, and Alice learns the intersection \(A \cap B\). sa-PSI was recently introduced by Garimella et al. (Crypto 2022), who described a semi-honest protocol with communication that scales with the description size of Alice’s set, instead of its cardinality. In this paper, we present the first sa-PSI protocol secure against malicious adversaries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_19](https://doi.org/10.1007/978-3-031-38557-5_19)
## Secure Multiparty Computation from Threshold Encryption Based on Class Groups.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#secure-multiparty-computation-from-threshold-encryption-based-on-class-groups)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#secure-multiparty-computation-from-threshold-encryption-based-on-class-groups)
### Authors
* Lennart Braun, Aarhus University, Aarhus, Denmark
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
### Abstract
> We construct the first actively-secure threshold version of the cryptosystem based on class groups from the so-called CL framework (Castagnos and Laguillaumie, 2015).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_20](https://doi.org/10.1007/978-3-031-38557-5_20)
## Two-Round Stateless Deterministic Two-Party Schnorr Signatures from Pseudorandom Correlation Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#two-round-stateless-deterministic-two-party-schnorr-signatures-from-pseudorandom-correlation-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#two-round-stateless-deterministic-two-party-schnorr-signatures-from-pseudorandom-correlation-functions)
### Authors
* Yashvanth Kondi, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Lawrence Roy, Aarhus University, Aarhus, Denmark
### Abstract
> Schnorr signatures are a popular choice due to their simplicity, provable security, and linear structure that enables relatively easy threshold signing protocols. The deterministic variant of Schnorr (where the nonce is derived in a stateless manner using a PRF from the message and a long term secret) is widely used in practice since it mitigates the threats of a faulty or poor randomness generator (which in Schnorr leads to catastrophic breaches of security). Unfortunately, threshold protocols for the deterministic variant of Schnorr have so far been quite inefficient, as they make non black-box use of the PRF involved in the nonce generation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_21](https://doi.org/10.1007/978-3-031-38557-5_21)
## Fully Adaptive Schnorr Threshold Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#fully-adaptive-schnorr-threshold-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#fully-adaptive-schnorr-threshold-signatures)
### Authors
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Chelsea Komlo, University of Waterloo & Zcash Foundation, Waterloo, Canada
* Mary Maller, Ethereum Foundation & PQShield, London, UK
### Abstract
> We prove adaptive security of a simple three-round threshold Schnorr signature scheme, which we call \(\textsf{Sparkle}\). The standard notion of security for threshold signatures considers a static adversary – one who must declare which parties are corrupt at the beginning of the protocol. The stronger adaptive adversary can at any time corrupt parties and learn their state. This notion is natural and practical, yet not proven to be met by most schemes in the literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_22](https://doi.org/10.1007/978-3-031-38557-5_22)
## Snowblind: A Threshold Blind Signature in Pairing-Free Groups.
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#snowblind-a-threshold-blind-signature-in-pairing-free-groups)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#snowblind-a-threshold-blind-signature-in-pairing-free-groups)
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
🌍 **[English](../../../docs/en/Crypto/Crypto%2023-1.md#practical-schnorr-threshold-signatures-without-the-algebraic-group-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2023-1.md#practical-schnorr-threshold-signatures-without-the-algebraic-group-model)
### Authors
* Hien Chu, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Paul Gerhart, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Dominique Schröder, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Tim Ruffing, Blockstream Research, Victoria, Canada
### Abstract
> Threshold signatures are digital signature schemes in which a set of n signers specify a threshold t such that any subset of size t is authorized to produce signatures on behalf of the group. There has recently been a renewed interest in this primitive, largely driven by the need to secure highly valuable signing keys, e.g., DNSSEC keys or keys protecting digital wallets in the cryptocurrency ecosystem. Of special interest is FROST, a practical Schnorr threshold signature scheme, which is currently undergoing standardization in the IETF and whose security was recently analyzed at CRYPTO’22.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_24](https://doi.org/10.1007/978-3-031-38557-5_24)
