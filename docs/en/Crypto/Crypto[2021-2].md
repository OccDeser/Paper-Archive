# Crypto[2021-2]
## Game-Theoretic Fairness Meets Multi-party Protocols: The Case of Leader Election.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#game-theoretic-fairness-meets-multi-party-protocols-the-case-of-leader-election)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#game-theoretic-fairness-meets-multi-party-protocols-the-case-of-leader-election)
### Authors
* Kai-Min Chung, Academia Sinica, Taipei City, Taiwan
* T.-H. Hubert Chan, The University of Hong Kong, Pokfulam, Hong Kong
* Ting Wen, The University of Hong Kong, Pokfulam, Hong Kong
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Suppose that n players want to elect a random leader and they communicate by posting messages to a common broadcast channel. This problem is called leader election, and it is fundamental to the distributed systems and cryptography literature. Recently, it has attracted renewed interests due to its promised applications in decentralized environments. In a game theoretically fair leader election protocol, roughly speaking, we want that even a majority coalition cannot increase its own chance of getting elected, nor hurt the chance of any honest individual. The folklore tournament-tree protocol, which completes in logarithmically many rounds, can easily be shown to satisfy game theoretic security. To the best of our knowledge, no sub-logarithmic round protocol was known in the setting that we consider.
> 
> We show that by adopting an appropriate notion of approximate game-theoretic fairness, and under standard cryptographic assumption, we can achieve \((1-1/2^{\varTheta (r)})\)-fairness in r rounds for \(\varTheta (\log \log n) \le r \le \varTheta (\log n)\), where n denotes the number of players. In particular, this means that we can approximately match the fairness of the tournament tree protocol using as few as \(O(\log \log n)\) rounds. We also prove a lower bound showing that logarithmically many rounds are necessary if we restrict ourselves to “perfect” game-theoretic fairness and protocols that are “very similar in structure” to the tournament-tree protocol.
> 
> Although leader election is a well-studied problem in other contexts in distributed computing, our work is the first exploration of the round complexity of game-theoretically fair leader election in the presence of a possibly majority coalition. As a by-product of our exploration, we suggest a new, approximate game-theoretic fairness notion, called “approximate sequential fairness”, which provides a more desirable solution concept than some previously studied approximate fairness notions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_1](https://doi.org/10.1007/978-3-030-84245-1_1)
## Computational Hardness of Optimal Fair Computation: Beyond Minicrypt.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#computational-hardness-of-optimal-fair-computation-beyond-minicrypt)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#computational-hardness-of-optimal-fair-computation-beyond-minicrypt)
### Authors
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
### Abstract
> Secure multi-party computation allows mutually distrusting parties to compute securely over their private data. However, guaranteeing output delivery to honest parties when the adversarial parties may abort the protocol has been a challenging objective. As a representative task, this work considers two-party coin-tossing protocols with guaranteed output delivery, a.k.a., fair coin-tossing.
> 
> In the information-theoretic plain model, as in two-party zero-sum games, one of the parties can force an output with certainty. In the commitment-hybrid, any r-message coin-tossing protocol is \({1/\sqrt{r}}\)-unfair, i.e., the adversary can change the honest party’s output distribution by \(1/\sqrt{r}\) in the statistical distance. Moran, Naor, and Segev (TCC–2009) constructed the first 1/r-unfair protocol in the oblivious transfer-hybrid. No further security improvement is possible because Cleve (STOC–1986) proved that 1/r-unfairness is unavoidable. Therefore, Moran, Naor, and Segev’s coin-tossing protocol is optimal. However, is oblivious transfer necessary for optimal fair coin-tossing?
> 
> Maji and Wang (CRYPTO–2020) proved that any coin-tossing protocol using one-way functions in a black-box manner is at least \(1/\sqrt{r}\)-unfair. That is, optimal fair coin-tossing is impossible in Minicrypt. Our work focuses on tightly characterizing the hardness of computation assumption necessary and sufficient for optimal fair coin-tossing within Cryptomania, outside Minicrypt. Haitner, Makriyannia, Nissim, Omri, Shaltiel, and Silbak (FOCS–2018 and TCC–2018) proved that better than \(1/\sqrt{r}\)-unfairness, for any constant r, implies the existence of a key-agreement protocol.
> 
> We prove that any coin-tossing protocol using public-key encryption (or, multi-round key agreement protocols) in a black-box manner must be \(1/\sqrt{r}\)-unfair. Next, our work entirely characterizes the additional power of secure function evaluation functionalities for optimal fair coin-tossing. We augment the model with an idealized secure function evaluation of f, a.k.a., the f-hybrid. If f is complete, that is, oblivious transfer is possible in the f-hybrid, then optimal fair coin-tossing is also possible in the f-hybrid. On the other hand, if f is not complete, then a coin-tossing protocol using public-key encryption in a black-box manner in the f-hybrid is at least \(1/\sqrt{r}\)-unfair.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_2](https://doi.org/10.1007/978-3-030-84245-1_2)
## YOSO: You Only Speak Once - Secure MPC with Stateless Ephemeral Roles.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#yoso-you-only-speak-once-secure-mpc-with-stateless-ephemeral-roles)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#yoso-you-only-speak-once-secure-mpc-with-stateless-ephemeral-roles)
### Authors
* Craig Gentry, Algorand Foundation, New York, USA
* Shai Halevi, Algorand Foundation, New York, USA
* Hugo Krawczyk, Algorand Foundation, New York, USA
* Tal Rabin, Algorand Foundation, New York, USA
* Bernardo Magri, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* Tal Rabin, UPenn, Philadelphia, USA
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
### Abstract
> The inherent difficulty of maintaining stateful environments over long periods of time gave rise to the paradigm of serverless computing, where mostly stateless components are deployed on demand to handle computation tasks, and are torn down once their task is complete. Serverless architecture could offer the added benefit of improved resistance to targeted denial-of-service attacks, by hiding from the attacker the physical machines involved in the protocol until after they complete their work. Realizing such protection, however, requires that the protocol only uses stateless parties, where each party sends only one message and never needs to speaks again. Perhaps the most famous example of this style of protocols is the Nakamoto consensus protocol used in Bitcoin: A peer can win the right to produce the next block by running a local lottery (mining) while staying covert. Once the right has been won, it is executed by sending a single message. After that, the physical entity never needs to send more messages.
> 
> We refer to this as the You-Only-Speak-Once (YOSO) property, and initiate the formal study of it within a new model that we call the YOSO model. Our model is centered around the notion of roles, which are stateless parties that can only send a single message. Crucially, our modelling separates the protocol design, that only uses roles, from the role-assignment mechanism, that assigns roles to actual physical entities. This separation enables studying these two aspects separately, and our YOSO model in this work only deals with the protocol-design aspect.
> 
> We describe several techniques for achieving YOSO MPC; both computational and information theoretic. Our protocols are synchronous and provide guaranteed output delivery (which is important for application domains such as blockchains), assuming honest majority of roles in every time step. We describe a practically efficient computationally-secure protocol, as well as a proof-of-concept information theoretically secure protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_3](https://doi.org/10.1007/978-3-030-84245-1_3)
## Fluid MPC: Secure Multiparty Computation with Dynamic Participants.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#fluid-mpc-secure-multiparty-computation-with-dynamic-participants)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#fluid-mpc-secure-multiparty-computation-with-dynamic-participants)
### Authors
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Matthew Green, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Gabriel Kaptchuk, Boston University, Boston, USA
### Abstract
> Existing approaches to secure multiparty computation (MPC) require all participants to commit to the entire duration of the protocol. As interest in MPC continues to grow, it is inevitable that there will be a desire to use it to evaluate increasingly complex functionalities, resulting in computations spanning several hours or days.
> 
> Such scenarios call for a dynamic participation model for MPC where participants have the flexibility to go offline as needed and (re)join when they have available computational resources. Such a model would also democratize access to privacy-preserving computation by facilitating an “MPC-as-a-service” paradigm—the deployment of MPC in volunteer-operated networks (such as blockchains, where dynamism is inherent) that perform computation on behalf of clients.
> 
> In this work, we initiate the study of fluid MPC, where parties can dynamically join and leave the computation. The minimum commitment required from each participant is referred to as fluidity, measured in the number of rounds of communication that it must stay online. Our contributions are threefold:
> 
> We provide a formal treatment of fluid MPC, exploring various possible modeling choices.
> 
> We construct information-theoretic fluid MPC protocols in the honest-majority setting. Our protocols achieve maximal fluidity, meaning that a party can exit the computation after receiving and sending messages in one round.
> 
> We implement our protocol and test it in multiple network settings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_4](https://doi.org/10.1007/978-3-030-84245-1_4)
## Secure Computation from One-Way Noisy Communication, or: Anti-correlation via Anti-concentration.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#secure-computation-from-one-way-noisy-communication-or-anti-correlation-via-anti-concentration)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#secure-computation-from-one-way-noisy-communication-or-anti-correlation-via-anti-concentration)
### Authors
* Shweta Agrawal, Indian Institute of Technology Madras, Chennai, India
* Yuval Ishai, Technion, Haifa, Israel
* Eyal Kushilevitz, Technion, Haifa, Israel
* Varun Narayanan, Tata Institute of Fundamental Research, Mumbai, India
* Vinod Prabhakaran, Tata Institute of Fundamental Research, Mumbai, India
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
* Alon Rosen, IDC Herzliya, Herzliya, Israel
### Abstract
> Can a sender encode a pair of messages \((m_0,m_1)\) jointly, and send their encoding over (say) a binary erasure channel, so that the receiver can decode exactly one of the two messages and the sender does not know which one?
> 
> Garg et al. (Crypto 2015) showed that this is information-theoretically impossible. We show how to circumvent this impossibility by assuming that the receiver is computationally bounded, settling for an inverse-polynomial security error (which is provably necessary), and relying on ideal obfuscation. Our solution creates a “computational anti-correlation” between the events of receiving \(m_0\) and receiving \(m_1\) by exploiting the anti-concentration of the binomial distribution.
> 
> The ideal obfuscation primitive in our construction can either be directly realized using (stateless) tamper-proof hardware, yielding an unconditional result, or heuristically instantiated in the plain model using existing indistinguishability obfuscation schemes.
> 
> As a corollary, we get similar feasibility results for general secure computation of sender-receiver functionalities by leveraging the completeness of the above “random oblivious transfer” functionality.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_5](https://doi.org/10.1007/978-3-030-84245-1_5)
## Broadcast-Optimal Two Round MPC with an Honest Majority.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#broadcast-optimal-two-round-mpc-with-an-honest-majority)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#broadcast-optimal-two-round-mpc-with-an-honest-majority)
### Authors
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Bernardo Magri, Aarhus University, Aarhus, Denmark
* Divya Ravi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
* Bernardo Magri, Concordium Blockchain Research Center, Aarhus, Denmark
* Luisa Siniscalchi, Concordium Blockchain Research Center, Aarhus, Denmark
### Abstract
> This paper closes the question of the possibility of two-round MPC protocols achieving different security guarantees with and without the availability of broadcast in any given round. Cohen et al. [CGZ20] study this question in the dishonest majority setting; we complete the picture by studying the honest majority setting.
> 
> In the honest majority setting, given broadcast in both rounds, it is known that the strongest guarantee—guaranteed output delivery—is achievable [GLS15]. We show that, given broadcast in the first round only, guaranteed output delivery is still achievable. Given broadcast in the second round only, we give a new construction that achieves identifiable abort, and we show that fairness—and thus guaranteed output delivery—are not achievable in this setting. Finally, if only peer-to-peer channels are available, we show that the weakest guarantee—selective abort—is the only one achievable for corruption thresholds \(t> 1\) and for \(t=1\) and \(n=3\). On the other hand, it is already known that selective abort can be achieved in these cases. In the remaining cases, i.e., \(t= 1\) and \(n\ge 4\), it is known [IKP10, IKKP15] that guaranteed output delivery (and thus all weaker guarantees) are possible.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_6](https://doi.org/10.1007/978-3-030-84245-1_6)
## Three-Round Secure Multiparty Computation from Black-Box Two-Round Oblivious Transfer.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#three-round-secure-multiparty-computation-from-black-box-two-round-oblivious-transfer)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#three-round-secure-multiparty-computation-from-black-box-two-round-oblivious-transfer)
### Authors
* Arpita Patra, Indian Institute of Science, Bangalore, India
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### Abstract
> We give constructions of three-round secure multiparty computation (MPC) protocols for general functions that make black-box use of a two-round oblivious transfer (OT). For the case of semi-honest adversaries, we make use of a two-round, semi-honest secure OT in the plain model. This resolves the round-complexity of black-box (semi-honest) MPC protocols from minimal assumptions and answers an open question of Applebaum et al. (ITCS 2020). For the case of malicious adversaries, we make use of a two-round maliciously-secure OT in the common random/reference string model that satisfies a (mild) variant of adaptive security for the receiver.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_7](https://doi.org/10.1007/978-3-030-84245-1_7)
## On the Round Complexity of Black-Box Secure MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#on-the-round-complexity-of-black-box-secure-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#on-the-round-complexity-of-black-box-secure-mpc)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, US
* Amit Sahai, UCLA, Los Angeles, US
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### Abstract
> We consider the question of minimizing the round complexity of secure multiparty computation (MPC) protocols that make a black-box use of simple cryptographic primitives with security against any number of malicious parties. In the plain model, previous black-box protocols required a high constant number of rounds (>15). This is far from the known lower bound of 4 rounds for protocols with black-box simulators.
> 
> When allowing random oblivious transfer (OT) correlations, 2-round protocols making black-box use of a pseudorandom generator were known. However, such protocols were obtained via a round-collapsing “protocol garbling” technique that has poor concrete efficiency and makes non-black-box use of an underlying maliciously secure protocol.
> 
> We improve this state of affairs by presenting the following types of black-box protocols.
> 
> 4-round “pairwise MPC” in the plain model. This round-optimal protocol enables each ordered pair of parties to compute a function of both inputs whose output is delivered to the second party. The protocol makes black-box use of any public-key encryption (\(\mathsf {PKE}\)) with pseudorandom public keys. As a special case, we get a black-box round-optimal realization of secure (copies of) OT between every ordered pair of parties.
> 
> 2-round MPC from OT correlations. This round-optimal protocol makes a black-box use of any general 2-round MPC protocol satisfying an augmented notion of semi-honest security. In the two-party case, this yields new kinds of 2-round black-box protocols.
> 
> 5-round MPC in the plain model. This protocol makes a black-box use of \(\mathsf {PKE}\) with pseudorandom public keys, and 2-round oblivious transfer with “semi-malicious” security.
> 
> A key technical tool for the first result is a novel combination of split-state non-malleable codes (Dziembowski, Pietrzak, and Wichs, JACM’18) with standalone secure two-party protocols to construct non-malleable two-party protocols. The second result is based on a new round-optimized variant of the “IPS compiler” (Ishai, Prabhakaran and Sahai, Crypto’08). The third result is obtained via a specialized combination of these two techniques.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_8](https://doi.org/10.1007/978-3-030-84245-1_8)
## ATLAS: Efficient and Scalable MPC in the Honest Majority Setting.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#atlas-efficient-and-scalable-mpc-in-the-honest-majority-setting)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#atlas-efficient-and-scalable-mpc-in-the-honest-majority-setting)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Hanjun Li, University of Washington, Seattle, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, USA
### Abstract
> In this work, we address communication, computation, and round efficiency of unconditionally secure multi-party computation for arithmetic circuits in the honest majority setting. We achieve both algorithmic and practical improvements:
> 
> The best known result in the semi-honest setting has been due to Damgård and Nielsen (CRYPTO 2007). Over the last decade, their construction has played an important role in the progress of efficient secure computation. However despite a number of follow-up works, any significant improvements to the basic semi-honest protocol have been hard to come by. We show \(33\%\) improvement in communication complexity of this protocol. We show how to generalize this result to the malicious setting, leading to the best known unconditional honest majority MPC with malicious security.
> 
> We focus on the round complexity of the Damgård and Nielsen protocol and improve it by a factor of 2. Our improvement relies on a novel observation relating to an interplay between Damgård and Nielsen multiplication and Beaver triple multiplication. An implementation of our constructions shows an execution run time improvement compared to the state of the art ranging from \(30\%\) to \(50\%\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_9](https://doi.org/10.1007/978-3-030-84245-1_9)
## Unconditional Communication-Efficient MPC via Hall's Marriage Theorem.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#unconditional-communication-efficient-mpc-via-halls-marriage-theorem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#unconditional-communication-efficient-mpc-via-halls-marriage-theorem)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, USA
### Abstract
> The best known n party unconditional multiparty computation protocols with an optimal corruption threshold communicates O(n) field elements per gate. This has been the case even in the semi-honest setting despite over a decade of research on communication complexity in this setting. Going to the slightly sub-optimal corruption setting, the work of Damgård, Ishai, and Krøigaard (EUROCRYPT 2010) provided the first protocol for a single circuit achieving communication complexity of \(O(\log |C|)\) elements per gate. While a number of works have improved upon this result, obtaining a protocol with O(1) field elements per gate has been an open problem.
> 
> In this work, we construct the first unconditional multi-party computation protocol evaluating a single arithmetic circuit with amortized communication complexity of O(1) elements per gate.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_10](https://doi.org/10.1007/978-3-030-84245-1_10)
## Non-interactive Secure Multiparty Computation for Symmetric Functions, Revisited: More Efficient Constructions and Extensions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#non-interactive-secure-multiparty-computation-for-symmetric-functions-revisited-more-efficient-constructions-and-extensions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#non-interactive-secure-multiparty-computation-for-symmetric-functions-revisited-more-efficient-constructions-and-extensions)
### Authors
* Reo Eriguchi, The University of Tokyo, Tokyo, Japan
* Reo Eriguchi, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Kazuma Ohara, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Shota Yamada, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Koji Nuida, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Koji Nuida, Kyushu University, Fukuoka, Japan
### Abstract
> Non-interactive secure multiparty computation (NIMPC) is a variant of secure computation which allows each of n players to send only a single message depending on his input and correlated randomness. Abelian programs, which can realize any symmetric function, are defined as functions on the sum of the players’ inputs over an abelian group and provide useful functionalities for real-world applications. We improve and extend the previous results in the following ways:
> 
> We present NIMPC protocols for abelian programs that improve the best known communication complexity. If inputs take any value of an abelian group \(\mathbb {G}\), our protocol achieves the communication complexity \(O(|\mathbb {G}|(\log |\mathbb {G}|)^2)\) improving \(O(|\mathbb {G}|^2n^2)\) of Beimel et al. (Crypto 2014). If players are limited to inputs from subsets of size at most d, our protocol achieves \(|\mathbb {G}|(\log |\mathbb {G}|)^2(\max \{n,d\})^{(1+o(1))t}\) where t is a corruption threshold. This result improves \(|\mathbb {G}|^3(nd)^{(1+o(1))t}\) of Beimel et al. (Crypto 2014), and even \(|\mathbb {G}|^{\log n+O(1)}n\) of Benhamouda et al. (Crypto 2017) if \(t=o(\log n)\) and \(|\mathbb {G}|=n^{\varTheta (1)}\).
> 
> We propose for the first time NIMPC protocols for linear classifiers that are more efficient than those obtained from the generic construction.
> 
> We revisit a known transformation of Benhamouda et al. (Crypto 2017) from Private Simultaneous Messages (PSM) to NIMPC, which we repeatedly use in the above results. We reveal that a sub-protocol used in the transformation does not satisfy the specified security. We also fix their protocol with only constant overhead in the communication complexity. As a byproduct, we obtain an NIMPC protocol for indicator functions with asymptotically optimal communication complexity with respect to the input length.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_11](https://doi.org/10.1007/978-3-030-84245-1_11)
## Efficient Information-Theoretic Multi-party Computation over Non-commutative Rings.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#efficient-information-theoretic-multi-party-computation-over-non-commutative-rings)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#efficient-information-theoretic-multi-party-computation-over-non-commutative-rings)
### Authors
* Daniel Escudero, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Eduardo Soria-Vazquez, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, UAE
### Abstract
> We construct the first efficient, unconditionally secure MPC protocol that only requires black-box access to a non-commutative ring R. Previous results in the same setting were efficient only either for a constant number of corruptions or when computing branching programs and formulas. Our techniques are based on a generalization of Shamir’s secret sharing to non-commutative rings, which we derive from the work on Reed Solomon codes by Quintin, Barbier and Chabot (IEEE Transactions on Information Theory, 2013). When the center of the ring contains a set \(A = \{\alpha _0, \ldots , \alpha _n\}\) such that \(\forall i \ne j, \alpha _i \,-\, \alpha _j \in R^*\), the resulting secret sharing scheme is strongly multiplicative and we can generalize existing constructions over finite fields without much trouble.
> 
> Most of our work is devoted to the case where the elements of A do not commute with all of R, but they just commute with each other. For such rings, the secret sharing scheme cannot be linear “on both sides” and furthermore it is not multiplicative. Nevertheless, we are still able to build MPC protocols with a concretely efficient online phase and black-box access to R. As an example we consider the ring \(\mathcal {M}_{m\times m}(\mathbb {Z}/2^k\mathbb {Z})\), for which when \(m > \log (n+1)\), we obtain protocols that require around \(\lceil \log (n+1)\rceil /2\) less communication and \(2\lceil \log (n+1)\rceil \) less computation than the state of the art protocol based on Circuit Amortization Friendly Encodings (Dalskov, Lee and Soria-Vazquez, ASIACRYPT 2020).
> 
> In this setting with a “less commutative” A, our black-box preprocessing phase has a less practical complexity of \(\mathsf {poly}(n)\). We fix this by additionally providing specialized, concretely efficient preprocessing protocols for \(\mathcal {M}_{m\times m}(\mathbb {Z}/2^k\mathbb {Z})\) that exploit the structure of the matrix ring.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_12](https://doi.org/10.1007/978-3-030-84245-1_12)
## Pushing the Limits of Valiant's Universal Circuits: Simpler, Tighter and More Compact.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#pushing-the-limits-of-valiants-universal-circuits-simpler-tighter-and-more-compact)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#pushing-the-limits-of-valiants-universal-circuits-simpler-tighter-and-more-compact)
### Authors
* Hanlin Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Shuoyao Zhao, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Wenling Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Zhenkai Hu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Yu Yu, Shanghai Qi Zhi Institute, 701 Yunjin Road, Shanghai, 200232, China
* Yu Yu, Shanghai Key Laboratory of Privacy-Preserving Computation, 701 Yunjin Road, Shanghai, 200232, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### Abstract
> A universal circuit (UC) is a general-purpose circuit that can simulate arbitrary circuits (up to a certain size n). Valiant provides a k-way recursive construction of UCs (STOC 1976), where k tunes the complexity of the recursion. More concretely, Valiant gives theoretical constructions of 2-way and 4-way UCs of asymptotic (multiplicative) sizes \(5n\log n\) and \(4.75 n\log n\) respectively, which matches the asymptotic lower bound \(\varOmega (n\log n)\) up to some constant factor.
> 
> Motivated by various privacy-preserving cryptographic applications, Kiss et al. (Eurocrypt 2016) validated the practicality of 2-way universal circuits by giving example implementations for private function evaluation. Günther et al. (Asiacrypt 2017) and Alhassan et al. (J. Cryptology 2020) implemented the 2-way/4-way hybrid UCs with various optimizations in place towards making universal circuits more practical. Zhao et al. (Asiacrypt 2019) optimized Valiant’s 4-way UC to asymptotic size \(4.5 n\log n\) and proved a lower bound \(3.64 n\log n\) for UCs under Valiant’s framework. As the scale of computation goes beyond 10-million-gate (\(n=10^7\)) or even billion-gate level (\(n=10^9\)), the constant factor in UC’s size plays an increasingly important role in application performance. In this work, we investigate Valiant’s universal circuits and present an improved framework for constructing universal circuits with the following advantages.
> 
> Simplicity. Parameterization is no longer needed. In contrast to those previous implementations that resorted to a hybrid construction combining \(k=2\) and \(k=4\) for a tradeoff between fine granularity and asymptotic size-efficiency, our construction gets the best of both worlds when configured at the lowest complexity (i.e., \(k=2\)).
> 
> Compactness. Our universal circuits have asymptotic size \(3n\log n\), improving upon the best previously known \(4.5n\log n\) by 33% and beating the \(3.64n\log n\) lower bound for UCs constructed under Valiant’s framework (Zhao et al., Asiacrypt 2019).
> 
> Tightness. We show that under our new framework the UC’s size is lower bounded by \(2.95 n\log n\), which almost matches the \(3n\log n\) circuit size of our 2-way construction.
> 
> We implement the 2-way universal circuit and evaluate its performance with other implementations, which confirms our theoretical analysis.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_13](https://doi.org/10.1007/978-3-030-84245-1_13)
## Oblivious Key-Value Stores and Amplification for Private Set Intersection.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#oblivious-key-value-stores-and-amplification-for-private-set-intersection)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#oblivious-key-value-stores-and-amplification-for-private-set-intersection)
### Authors
* Gayathri Garimella, Oregon State University, Corvallis, Oregon, USA
* Mike Rosulek, Oregon State University, Corvallis, Oregon, USA
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Ni Trieu, Arizona State University, Tempe, Arizona, USA
* Avishay Yanai, VMware Research, Palo Alto, USA
### Abstract
> Many recent private set intersection (PSI) protocols encode input sets as polynomials. We consider the more general notion of an oblivious key-value store (OKVS), which is a data structure that compactly represents a desired mapping \(k_i \mapsto v_i\). When the \(v_i\) values are random, the OKVS data structure hides the \(k_i\) values that were used to generate it. The simplest (and size-optimal) OKVS is a polynomial p that is chosen using interpolation such that \(p(k_i)=v_i\).
> 
> We initiate the formal study of oblivious key-value stores, and show new constructions resulting in the fastest OKVS to date.
> 
> Similarly to cuckoo hashing, current analysis techniques are insufficient for finding concrete parameters to guarantee a small failure probability for our OKVS constructions. Moreover, it would cost too much to run experiments to validate a small upperbound on the failure probability. We therefore show novel techniques to amplify an OKVS construction which has a failure probability p, to an OKVS with a similar overhead and failure probability \(p^c\). Setting p to be moderately small enables to validate it by running a relatively small number of O(1/p) experiments. This validates a \(p^c\) failure probability for the amplified OKVS.
> 
> Finally, we describe how OKVS can significantly improve the state of the art of essentially all variants of PSI. This leads to the fastest two-party PSI protocols to date, for both the semi-honest and the malicious settings. Specifically, in networks with moderate bandwidth (e.g., 30–300 Mbps) our malicious two-party PSI protocol has 40% less communication and is 20–40% faster than the previous state of the art protocol, even though the latter only has heuristic confidence.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_14](https://doi.org/10.1007/978-3-030-84245-1_14)
## MHz2k: MPC from HE over $\mathbb {Z}_{2^k}$ with New Packing, Simpler Reshare, and Better ZKP.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#mhz2k-mpc-from-he-over-mathbb-z-2-k-with-new-packing-simpler-reshare-and-better-zkp)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#mhz2k-mpc-from-he-over-mathbb-z-2-k-with-new-packing-simpler-reshare-and-better-zkp)
### Authors
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Keewoo Lee, Seoul National University, Seoul, Republic of Korea
* Dongwoo Kim, Western Digital Research, Milpitas, USA
* Jung Hee Cheon, Crypto Lab Inc., Seoul, Republic of Korea
### Abstract
> We propose a multi-party computation (MPC) protocol over \(\mathbb {Z}_{2^k}\) secure against actively corrupted majority from somewhat homomorphic encryption. The main technical contributions are: (i) a new efficient packing method for \(\mathbb {Z}_{2^k}\)-messages in lattice-based somewhat homomorphic encryption schemes, (ii) a simpler reshare protocol for level-dependent packings, (iii) a more efficient zero-knowledge proof of plaintext knowledge on cyclotomic rings \({\mathbb Z}[X]/\varPhi _M(X)\) with M being a prime. Integrating them, our protocol shows from 2.2x upto 4.8x improvements in amortized communication costs compared to the previous best results. Our techniques not only improve the efficiency of MPC over \(\mathbb {Z}_{2^k}\) considerably, but also provide a toolkit that can be leveraged when designing other cryptographic primitives over \(\mathbb {Z}_{2^k}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_15](https://doi.org/10.1007/978-3-030-84245-1_15)
## Sublinear GMW-Style Compiler for MPC with Preprocessing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#sublinear-gmw-style-compiler-for-mpc-with-preprocessing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#sublinear-gmw-style-compiler-for-mpc-with-preprocessing)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Be’er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Technion, Haifa, Israel
### Abstract
> We consider the efficiency of protocols for secure multiparty computation (MPC) with a dishonest majority. A popular approach for the design of such protocols is to employ preprocessing. Before the inputs are known, the parties generate correlated secret randomness, which is consumed by a fast and possibly “information-theoretic” online protocol.
> 
> A powerful technique for securing such protocols against malicious parties uses homomorphic MACs to authenticate the values produced by the online protocol. Compared to a baseline protocol, which is only secure against semi-honest parties, this involves a significant increase in the size of the correlated randomness, by a factor of up to a statistical security parameter. Different approaches for partially mitigating this extra storage cost come at the expense of increasing the online communication.
> 
> In this work we propose a new technique for protecting MPC with preprocessing against malicious parties. We show that for circuit evaluation protocols that satisfy mild security and structural requirements, that are met by many standard protocols with semi-honest security, the extra additive storage and online communication costs are both logarithmic in the circuit size. This applies to Boolean circuits and to arithmetic circuits over fields or rings, and to both information-theoretic and computationally secure protocols. Our protocol can be viewed as a sublinear information-theoretic variant of the celebrated “GMW compiler” that applies to natural protocols for MPC with preprocessing.
> 
> Our compiler makes a novel use of the techniques of Boneh et al. (Crypto 2019) for sublinear distributed zero knowledge, which were previously only used in the setting of honest-majority MPC.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_16](https://doi.org/10.1007/978-3-030-84245-1_16)
## Limits on the Adaptive Security of Yao's Garbling.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#limits-on-the-adaptive-security-of-yaos-garbling)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#limits-on-the-adaptive-security-of-yaos-garbling)
### Authors
* Chethan Kamath, Boston, USA
* Karen Klein, IST Austria, Klosterneuburg, Austria
* Krzysztof Pietrzak, IST Austria, Klosterneuburg, Austria
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Tokyo, Japan
### Abstract
> Yao’s garbling scheme is one of the most fundamental cryptographic constructions. Lindell and Pinkas (Journal of Cryptograhy 2009) gave a formal proof of security in the selective setting where the adversary chooses the challenge inputs before seeing the garbled circuit assuming secure symmetric-key encryption (and hence one-way functions). This was followed by results, both positive and negative, concerning its security in the, stronger, adaptive setting. Applebaum et al. (Crypto 2013) showed that it cannot satisfy adaptive security as is, due to a simple incompressibility argument. Jafargholi and Wichs (TCC 2017) considered a natural adaptation of Yao’s scheme (where the output mapping is sent in the online phase, together with the garbled input) that circumvents this negative result, and proved that it is adaptively secure, at least for shallow circuits. In particular, they showed that for the class of circuits of depth \(\delta \), the loss in security is at most exponential in \(\delta \). The above results all concern the simulation-based notion of security.
> 
> In this work, we show that the upper bound of Jafargholi and Wichs is basically optimal in a strong sense. As our main result, we show that there exists a family of Boolean circuits, one for each depth \(\delta \in \mathbb {N}\), such that any black-box reduction proving the adaptive indistinguishability of the natural adaptation of Yao’s scheme from any symmetric-key encryption has to lose a factor that is exponential in \(\sqrt{\delta }\). Since indistinguishability is a weaker notion than simulation, our bound also applies to adaptive simulation.
> 
> To establish our results, we build on the recent approach of Kamath et al. (Eprint 2021), which uses pebbling lower bounds in conjunction with oracle separations to prove fine-grained lower bounds on loss in cryptographic security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_17](https://doi.org/10.1007/978-3-030-84245-1_17)
## Subtractive Sets over Cyclotomic Rings - Limits of Schnorr-Like Arguments over Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#subtractive-sets-over-cyclotomic-rings-limits-of-schnorr-like-arguments-over-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#subtractive-sets-over-cyclotomic-rings-limits-of-schnorr-like-arguments-over-lattices)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, UK
* Russell W. F. Lai, Chair of Applied Cryptography, Friedrich-Alexander-Universität Erlangen-Nürnberg, Nürnberg, Germany
### Abstract
> We study when (dual) Vandermonde systems of the form \(\mathbf {V} _T^{{(\intercal )}} \cdot \mathbf {z} = s\cdot \mathbf {w}\) admit a solution \(\mathbf {z}\) over a ring \(\mathcal {R}\), where \(\mathbf {V} _T\) is the Vandermonde matrix defined by a set T and where the “slack” s is a measure of the quality of solutions. To this end, we propose the notion of (s, t)-subtractive sets over a ring \(\mathcal {R}\), with the property that if S is (s, t)-subtractive then the above (dual) Vandermonde systems defined by any t-subset \(T \subseteq S\) are solvable over \(\mathcal {R}\). The challenge is then to find large sets S while minimising (the norm of) s when given a ring \(\mathcal {R}\).
> 
> By constructing families of (s, t)-subtractive sets S of size \(n = \textsf {poly}(\lambda )\) over cyclotomic rings \(\mathcal {R}= \mathbb {Z}[\zeta _{p^\ell }]\) for prime p, we construct Schnorr-like lattice-based proofs of knowledge for the SIS relation \(\mathbf {A} \cdot \mathbf {x} = s \cdot \mathbf {y} \bmod q\) with O(1/n) knowledge error, and \(s = 1\) in case \(p = \textsf {poly}(\lambda )\). Our technique slots naturally into the lattice Bulletproof framework from Crypto’20, producing lattice-based succinct arguments for NP with better parameters.
> 
> We then give matching impossibility results constraining n relative to s, which suggest that our Bulletproof-compatible protocols are optimal unless fundamentally new techniques are discovered. Noting that the knowledge error of lattice Bulletproofs is \(\varOmega (\log k/n)\) for witnesses in \(\mathcal {R}^k\) and subtractive set size \(n\), our result represents a barrier to practically efficient lattice-based succinct arguments in the Bulletproof framework.
> 
> Beyond these main results, the concept of (s, t)-subtractive sets bridges group-based threshold cryptography to lattice settings, which we demonstrate by relating it to distributed pseudorandom functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_18](https://doi.org/10.1007/978-3-030-84245-1_18)
## A Compressed $\varSigma $-Protocol Theory for Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#a-compressed-varsigma-protocol-theory-for-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#a-compressed-varsigma-protocol-theory-for-lattices)
### Authors
* Thomas Attema, Cryptology Group, CWI, Amsterdam, The Netherlands
* Ronald Cramer, Cryptology Group, CWI, Amsterdam, The Netherlands
* Lisa Kohl, Cryptology Group, CWI, Amsterdam, The Netherlands
* Thomas Attema, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Ronald Cramer, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Attema, Cyber Security and Robustness, TNO, The Hague, The Netherlands
### Abstract
> We show a lattice-based solution for commit-and-prove transparent circuit zero-knowledge (ZK) with polylog-communication, the first not depending on PCPs.
> 
> We start from compressed \(\varSigma \)-protocol theory (CRYPTO 2020), which is built around basic \(\varSigma \)-protocols for opening an arbitrary linear form on a long secret vector that is compactly committed to. These protocols are first compressed using a recursive “folding-technique” adapted from Bulletproofs, at the expense of logarithmic rounds. Proving in ZK that the secret vector satisfies a given constraint – captured by a circuit – is then by (blackbox) reduction to the linear case, via arithmetic secret-sharing techniques adapted from MPC. Commit-and-prove is also facilitated, i.e., when commitment(s) to the secret vector are created ahead of any circuit-ZK proof. On several platforms (incl. DL) this leads to logarithmic communication. Non-interactive versions follow from Fiat-Shamir.
> 
> This abstract modular theory strongly suggests that it should somehow be supported by a lattice-platform as well. However, when going through the motions and trying to establish low communication (on a SIS-platform), a certain significant lack in current understanding of multi-round protocols is exposed.
> 
> Namely, as opposed to the DL-case, the basic \(\varSigma \)-protocol in question typically has poly-small challenge space. Taking into account the compression-step – which yields non-constant rounds – and the necessity for parallelization to reduce error, there is no known tight result that the compound protocol admits an efficient knowledge extractor. We resolve the state of affairs here by a combination of two novel results which are fully general and of independent interest. The first gives a tight analysis of efficient knowledge extraction in case of non-constant rounds combined with poly-small challenge space, whereas the second shows that parallel repetition indeed forces rapid decrease of knowledge error.
> 
> Moreover, in our present context, arithmetic secret sharing is not defined over a large finite field but over a quotient of a number ring and this forces our careful adaptation of how the linearization techniques are deployed.
> 
> We develop our protocols in an abstract framework that is conceptually simple and can be flexibly instantiated. In particular, the framework applies to arbitrary rings and norms.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_19](https://doi.org/10.1007/978-3-030-84245-1_19)
## A New Simple Technique to Bootstrap Various Lattice Zero-Knowledge Proofs to QROM Secure NIZKs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#a-new-simple-technique-to-bootstrap-various-lattice-zero-knowledge-proofs-to-qrom-secure-nizks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#a-new-simple-technique-to-bootstrap-various-lattice-zero-knowledge-proofs-to-qrom-secure-nizks)
### Authors
* Shuichi Katsumata, AIST, Tokyo, Japan
### Abstract
> Many of the recent advanced lattice-based \(\varSigma \)-/public-coin honest verifier (HVZK) interactive protocols based on the techniques developed by Lyubashevsky (Asiacrypt’09, Eurocrypt’12) can be transformed into a non-interactive zero-knowledge (NIZK) proof in the random oracle model (ROM) using the Fiat-Shamir transform. Unfortunately, although they are known to be secure in the classical ROM, existing proof techniques are incapable of proving them secure in the quantum ROM (QROM). Alternatively, while we could instead rely on the Unruh transform (Eurocrypt’15), the resulting QROM secure NIZK will incur a large overhead compared to the underlying interactive protocol.
> 
> In this paper, we present a new simple semi-generic transform that compiles many existing lattice-based \(\varSigma \)-/public-coin HVZK interactive protocols into QROM secure NIZKs. Our transform builds on a new primitive called extractable linear homomorphic commitment protocol. The resulting NIZK has several appealing features: it is not only a proof of knowledge but also straight-line extractable; the proof overhead is smaller compared to the Unruh transform; it enjoys a relatively small reduction loss; and it requires minimal background on quantum computation. To illustrate the generality of our technique, we show how to transform the recent Bootle et al.’s 5-round protocol with an exact sound proof (Crypto’19) into a QROM secure NIZK by increasing the proof size by a factor of 2.6. This compares favorably to the Unruh transform that requires a factor of more than 50.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_20](https://doi.org/10.1007/978-3-030-84245-1_20)
## SMILE: Set Membership from Ideal Lattices with Applications to Ring Signatures and Confidential Transactions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#smile-set-membership-from-ideal-lattices-with-applications-to-ring-signatures-and-confidential-transactions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#smile-set-membership-from-ideal-lattices-with-applications-to-ring-signatures-and-confidential-transactions)
### Authors
* Vadim Lyubashevsky, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, IBM Research Europe, Zurich, Switzerland
* Gregor Seiler, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### Abstract
> In a set membership proof, the public information consists of a set of elements and a commitment. The prover then produces a zero-knowledge proof showing that the commitment is indeed to some element from the set. This primitive is closely related to concepts like ring signatures and “one-out-of-many” proofs that underlie many anonymity and privacy protocols. The main result of this work is a new succinct lattice-based set membership proof whose size is logarithmic in the size of the set.
> 
> We also give a transformation of our set membership proof to a ring signature scheme. The ring signature size is also logarithmic in the size of the public key set and has size \(16\) KB for a set of \(2^5\) elements, and \(22\) KB for a set of size \(2^{25}\). At an approximately 128-bit security level, these outputs are between 1.5\(\times \) and 7\(\times \) smaller than the current state of the art succinct ring signatures of Beullens et al. (Asiacrypt 2020) and Esgin et al. (CCS 2019).
> 
> We then show that our ring signature, combined with a few other techniques and optimizations, can be turned into a fairly efficient Monero-like confidential transaction system based on the MatRiCT framework of Esgin et al. (CCS 2019). With our new techniques, we are able to reduce the transaction proof size by factors of about 4X - 10X over the aforementioned work. For example, a transaction with two inputs and two outputs, where each input is hidden among \(2^{15}\) other accounts, requires approximately 30KB in our protocol .

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_21](https://doi.org/10.1007/978-3-030-84245-1_21)
## Deniable Fully Homomorphic Encryption from Learning with Errors.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#deniable-fully-homomorphic-encryption-from-learning-with-errors)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#deniable-fully-homomorphic-encryption-from-learning-with-errors)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Shafi Goldwasser, Simons Institute of TOC at UC Berkeley, Berkeley, CA, USA
* Saleet Mossel, MIT, Cambridge, MA, USA
### Abstract
> We define and construct Deniable Fully Homomorphic Encryption based on the Learning With Errors (LWE) polynomial hardness assumption. Deniable FHE enables storing encrypted data in the cloud to be processed securely without decryption, maintaining deniability of the encrypted data, as well the prevention of vote-buying in electronic voting schemes where encrypted votes can be tallied without decryption.
> 
> Our constructions achieve compactness independently of the level of deniability- both the size of the public key and the size of the ciphertexts are bounded by a fixed polynomial, independent of the detection probability achieved by the scheme. This is in contrast to all previous constructions of deniable encryption schemes (even without requiring homomorphisms) which are based on polynomial hardness assumptions, originating with the seminal work of Canetti, Dwork, Naor and Ostrovsky (CRYPTO 1997) in which the ciphertext size grows with the inverse of the detection probability. Canetti et al. argued that this dependence “seems inherent”, but our constructions illustrate this is not the case. We note that the Sahai-Waters (STOC 2014) construction of deniable encryption from indistinguishability obfuscation achieves compactness and can be easily modified to achieve deniable FHE as well, but it requires multiple, stronger sub-exponential hardness assumptions, which are furthermore not post-quantum secure. In contrast, our constructions rely only on the LWE polynomial hardness assumption, as currently required for FHE even without deniability.
> 
> The running time of our encryption algorithm depends on the inverse of the detection probability, thus the scheme falls short of achieving simultaneously compactness, negligible deniability probability and polynomial encryption time. Yet, we believe that achieving compactness is a fundamental step on the way to achieving all properties simultaneously as has been the historical journey for other primitives such as functional encryption. Our constructions support large message spaces, whereas previous constructions were bit by bit, and can be run in online-offline model of encryption, where the bulk of computation is independent of the message and may be performed in an offline pre-processing phase. This results in an efficient online phase whose running time is independent of the detection probability. At the heart of our constructions is a new way to use bootstrapping to obliviously generate FHE ciphertexts so that it supports faking under coercion.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_22](https://doi.org/10.1007/978-3-030-84245-1_22)
## Counterexamples to New Circular Security Assumptions Underlying iO.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#counterexamples-to-new-circular-security-assumptions-underlying-io)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#counterexamples-to-new-circular-security-assumptions-underlying-io)
### Authors
* Sam Hopkins, UC Berkeley, Berkeley, USA
* Aayush Jain, UCLA, Center for Encrypted Functionalities, and NTT Research, Los Angeles, USA
* Huijia Lin, UW, Los Angeles, USA
### Abstract
> We study several strengthening of classical circular security assumptions which were recently introduced in four new lattice-based constructions of indistinguishability obfuscation: Brakerski-Döttling-Garg-Malavolta (Eurocrypt 2020), Gay-Pass (STOC 2021), Brakerski-Döttling-Garg-Malavolta (Eprint 2020) and Wee-Wichs (Eprint 2020).
> 
> We provide explicit counterexamples to the 2-circular shielded randomness leakage assumption w.r.t. the Gentry-Sahai-Waters fully homomorphic encryption scheme proposed by Gay-Pass, and the homomorphic pseudorandom LWE samples conjecture proposed by Wee-Wichs. Our work suggests a separation between classical circular security of the kind underlying un-levelled fully-homomorphic encryption from the strengthened versions underlying recent iO constructions, showing that they are not (yet) on the same footing.
> 
> Our counterexamples exploit the flexibility to choose specific implementations of circuits, which is explicitly allowed in the Gay-Pass assumption and unspecified in the Wee-Wichs assumption. Their indistinguishabilty obfuscation schemes are still unbroken. Our work shows that the assumptions, at least, need refinement. In particular, generic leakage-resilient circular security assumptions are delicate, and their security is sensitive to the specific structure of the leakages involved.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_23](https://doi.org/10.1007/978-3-030-84245-1_23)
## How to Meet Ternary LWE Keys.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#how-to-meet-ternary-lwe-keys)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#how-to-meet-ternary-lwe-keys)
### Authors
* Alexander May, Ruhr-University Bochum, Bochum, Germany
### Abstract
> The LWE problem with its ring variants is today the most prominent candidate for building efficient public key cryptosystems resistant to quantum computers. NTRU-type cryptosystems use an LWE-type variant with small max-norm secrets, usually with ternary coefficients from the set \(\{-1,0,1\}\). The presumably best attack on these schemes is a hybrid attack that combines lattice reduction techniques with Odlyzko’s Meet-in-the-Middle approach. Odlyzko’s algorithm is a classical combinatorial attack that for key space size \(\mathcal{S}\) runs in time \(\mathcal{S}^{0.5}\). We substantially improve on this Meet-in-the-Middle approach, using the representation technique developed for subset sum algorithms. Asymptotically, our heuristic Meet-in-the-Middle attack runs in time roughly \(\mathcal{S}^{0.25}\), which also beats the \(\mathcal{S}^{\frac{1}{3}}\) complexity of the best known quantum algorithm.
> 
> For the round-3 NIST post-quantum encryptions NTRU and NTRU Prime we obtain non-asymptotic instantiations of our attack with complexity roughly \(\mathcal{S}^{0.3}\). As opposed to other combinatorial attacks, our attack benefits from larger LWE field sizes q, as they are often used in modern lattice-based signatures. For example, for BLISS and GLP signatures we obtain non-asymptotic combinatorial attacks around \(\mathcal{S}^{0.28}\).
> 
> Our attacks do not invalidate the security claims of the aforementioned schemes. However, they establish improved combinatorial upper bounds for their security. We leave it is an open question whether our new Meet-in-the-Middle attack in combination with lattice reduction can be used to speed up the hybrid attack.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_24](https://doi.org/10.1007/978-3-030-84245-1_24)
## Lattice Reduction with Approximate Enumeration Oracles - Practical Algorithms and Concrete Performance.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#lattice-reduction-with-approximate-enumeration-oracles-practical-algorithms-and-concrete-performance)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#lattice-reduction-with-approximate-enumeration-oracles-practical-algorithms-and-concrete-performance)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, UK
* Jianwei Li, Information Security Group, Royal Holloway, University of London, Egham, UK
* Joe Rowell, Information Security Group, Royal Holloway, University of London, Egham, UK
* Shi Bai, Department of Mathematical Sciences, Florida Atlantic University, Boca Raton, USA
### Abstract
> This work provides a systematic investigation of the use of approximate enumeration oracles in BKZ, building on recent technical progress on speeding-up lattice enumeration: relaxing (the search radius of) enumeration and extended preprocessing which preprocesses in a larger rank than the enumeration rank. First, we heuristically justify that relaxing enumeration with certain extreme pruning asymptotically achieves an exponential speed-up for reaching the same root Hermite factor (RHF). Second, we perform simulations/experiments to validate this and the performance for relaxed enumeration with numerically optimised pruning for both regular and extended preprocessing.
> 
> Upgrading BKZ with such approximate enumeration oracles gives rise to our main result, namely a practical and faster (wrt. previous work) polynomial-space lattice reduction algorithm for reaching the same RHF in practical and cryptographic parameter ranges. We assess its concrete time/quality performance with extensive simulations and experiments.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_25](https://doi.org/10.1007/978-3-030-84245-1_25)
## Towards Faster Polynomial-Time Lattice Reduction.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#towards-faster-polynomial-time-lattice-reduction)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#towards-faster-polynomial-time-lattice-reduction)
### Authors
* Paul Kirchner, IRISA/Inria, Rennes Univ., Rennes, France
* Pierre-Alain Fouque, IRISA/Inria, Rennes Univ., Rennes, France
* Thomas Espitau, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> The lll algorithm is a polynomial-time algorithm for reducing d-dimensional lattice with exponential approximation factor. Currently, the most efficient variant of lll, by Neumaier and Stehlé, has a theoretical running time in \(d^4\cdot B^{1+o\left( 1\right) }\) where B is the bitlength of the entries, but has never been implemented. This work introduces new asymptotically fast, parallel, yet heuristic, reduction algorithms with their optimized implementations. Our algorithms are recursive and fully exploit fast matrix multiplication. We experimentally demonstrate that by carefully controlling the floating-point precision during the recursion steps, we can reduce euclidean lattices of rank d in time \(\tilde{O}(d^\omega \cdot C)\), i.e., almost a constant number of matrix multiplications, where \(\omega \) is the exponent of matrix multiplication and C is the log of the condition number of the matrix. For cryptographic applications, C is close to B, while it can be up to d times larger in the worst case. It improves the running-time of the state-of-the-art implementation fplll by a multiplicative factor of order \(d^2\cdot B\). Further, we show that we can reduce structured lattices, the so-called knapsack lattices, in time \(\tilde{O}(d^{\omega -1}\cdot C)\) with a progressive reduction strategy. Besides allowing reducing huge lattices, our implementation can break several instances of Fully Homomorphic Encryption schemes based on large integers in dimension 2,230 with 4 millions of bits.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_26](https://doi.org/10.1007/978-3-030-84245-1_26)
## Lower Bounds on Lattice Sieving and Information Set Decoding.
🌍 **[English](../../../docs/en/Crypto/Crypto[2021-2].md#lower-bounds-on-lattice-sieving-and-information-set-decoding)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#lower-bounds-on-lattice-sieving-and-information-set-decoding)
### Authors
* Elena Kirshanova, Immanuel Kant Baltic Federal University, Kaliningrad, Russia
* Elena Kirshanova, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Thijs Laarhoven, Eindhoven University of Technology, Eindhoven, The Netherlands
### Abstract
> In two of the main areas of post-quantum cryptography, based on lattices and codes, nearest neighbor techniques have been used to speed up state-of-the-art cryptanalytic algorithms, and to obtain the lowest asymptotic cost estimates to date [May–Ozerov, Eurocrypt’15; Becker–Ducas–Gama–Laarhoven, SODA’16]. These upper bounds are useful for assessing the security of cryptosystems against known attacks, but to guarantee long-term security one would like to have closely matching lower bounds, showing that improvements on the algorithmic side will not drastically reduce the security in the future. As existing lower bounds from the nearest neighbor literature do not apply to the nearest neighbor problems appearing in this context, one might wonder whether further speedups to these cryptanalytic algorithms can still be found by only improving the nearest neighbor subroutines.
> 
> We derive new lower bounds on the costs of solving the nearest neighbor search problems appearing in these cryptanalytic settings. For the Euclidean metric we show that for random data sets on the sphere, the locality-sensitive filtering approach of [Becker–Ducas–Gama–Laarhoven, SODA 2016] using spherical caps is optimal, and hence within a broad class of lattice sieving algorithms covering almost all approaches to date, their asymptotic time complexity of \(2^{0.292d + o(d)}\) is optimal. Similar conditional optimality results apply to lattice sieving variants, such as the \(2^{0.265d + o(d)}\) complexity for quantum sieving [Laarhoven, PhD thesis 2016] and previously derived complexity estimates for tuple sieving [Herold–Kirshanova–Laarhoven, PKC 2018]. For the Hamming metric we derive new lower bounds for nearest neighbor searching which almost match the best upper bounds from the literature [May–Ozerov, Eurocrypt 2015]. As a consequence we derive conditional lower bounds on decoding attacks, showing that also here one should search for improvements elsewhere to significantly undermine security estimates from the literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_27](https://doi.org/10.1007/978-3-030-84245-1_27)
